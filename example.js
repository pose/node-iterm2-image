var assert = require('assert');
var http = require('http');

var drawInIterm = require('./index.js');

drawInIterm('./figure.png', function (err) {
  assert.ifError(err);
});

// URL + streams example
// TODO Your image URL goes here
// var imgUrl = '';
// http.get(imgUrl, function(res) {
//   if (res.statusCode === 200) {
//     drawInIterm(res, function (err) {
//       assert.ifError(err);
//     });
//   }
// });

