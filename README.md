# node-iterm2-image
Node.js bindings to display images in iTerm2 (nightly builds only).

## Install
```sh
npm install iterm2-image
```

## Usage
```js
var imgLoader = require('iterm2-image');
```

Load (and display) image from filepath:

```js
imgLoader('./path-to-file.png', function () {
  console.log('done!');
});
```

Easy, huh? Now using streams:

```js
var http = require('http');

var img = 'http://your/image';

http.get(img, function(res) {
  if (res.statusCode === 200) {
    imgLoader(res, function () {
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

## License
(The MIT License)

Copyright (c) 2014 Alberto Pose < albertopose at gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.$T
