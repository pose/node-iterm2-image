var assert = require('assert');
var http = require('http');

var iterm2ImageLoader = require('./index.js');

iterm2ImageLoader('./figure.png', function (err) {
  assert.ifError(err);
});

// URL example
// TODO Your image URL goes here
// var imgUrl = '';
// http.get(imgUrl, function(res) {
//   if (res.statusCode === 200) {
//     iterm2ImageLoader(res, function (err) {
//       assert.ifError(err);
//     });
//   }
// });
