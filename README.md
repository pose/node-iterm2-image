# node-iterm2-image
Node.js bindings to display images in iTerm2 (nightly builds only).

![iterm2-image](https://cloud.githubusercontent.com/assets/419703/2586880/6caee458-ba0d-11e3-9c87-e6013a7d0175.gif)

## Install
```sh
npm install iterm2-image
```

## Usage
```js
var drawInIterm = require('iterm2-image');
```

Load (and display) an image from a filepath:

```js
drawInIterm('./path-to-file.png', function () {
imgLoader('./path-to-file.png', function (err) {
  if (err) { throw err; }
  console.log('done!');
});
```

Easy, huh? Now using streams:

```js
var http = require('http');

var img = 'http://your/image';

http.get(img, function(res) {
  if (res.statusCode === 200) {
    drawInIterm(res, function () {
      if (err) { throw err; }
      console.log('done!');
    });
  }
});
```

## TODO

 * Parametrize output stream.
 * Return something meaningful in callback.

## Credits

Inspired by [iTerm2 Site image documentation section](http://www.iterm2.com/images.html#/section/home) and [Python Bindings](https://pypi.python.org/pypi/iterm2_image).

Nyan Cat image obtained from [here](http://arkannix.deviantart.com/art/WIP-NyanVentures-Flash-Game-359963606).
