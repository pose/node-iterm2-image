var http = require('https');

var iterm2ImageLoader = require('./index.js');

function urlExample() {
  // TODO Your image URL goes here
  var img = '';
  http.get(img, function(res) {
    if (res.statusCode === 200) {
      iterm2ImageLoader(res);
    }
  });
}

iterm2ImageLoader('./figure.png', urlExample);

