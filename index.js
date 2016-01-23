var fs = require('fs');
var path = require('path');
var Readable = require('stream').Readable;

var isStream = require('isStream');
var base64 = require('base64-stream');

module.exports = function (filePathOrStream, callback) {

  if (!callback) {
    throw new Error('callback is required');
  }

  var metadata = {};
  var outputStream = process.stdout;
  var inputStream;

  if (typeof filePathOrStream === 'string') {
    var stat = fs.statSync(filePathOrStream);
    inputStream  = fs.createReadStream(filePathOrStream);
    metadata.size = stat.size;
    metadata.name = new Buffer(path.basename(filePathOrStream)).toString('base64');
  } else if (isStream(filePathOrStream)) {
    inputStream = filePathOrStream;
  } else {
    throw new Error('Invalid parameter: it should be either string or stream');
  }

  // TODO Parametrize me
  metadata.inline = 1;

  outputStream.write('\033]1337;');

  var s = 'File=';

  Object.keys(metadata).forEach(function (key) {
    var value = metadata[key];
    s += key + '=' + value + ';';
  });

  s = s.slice(0, -1) + ':';

  outputStream.write(s);

  var base64EncodingStream = inputStream.pipe(base64.encode());
  base64EncodingStream.pipe(outputStream);

  base64EncodingStream.once('error', function (err) {
    base64EncodingStream.removeAllListeners('end');
    callback(err);
  });

  base64EncodingStream.once('end', function () {
    base64EncodingStream.removeAllListeners('error');
    outputStream.write('\07\n');
    callback();
  });
};
