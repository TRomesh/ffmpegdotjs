# ffmpegdotjs

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/TRomesh/ffmpegdotjs/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/ffmpegdotjs.svg?style=flat)](https://www.npmjs.com/package/ffmpegdotjs) [![npm downloads](https://img.shields.io/npm/dm/ffmpegdotjs.svg?style=flat-square)](https://www.npmjs.com/package/ffmpegdotjs)

Coming Soon!

:film_strip: :scissors: :memo: :camera:

## Prerequisite

- FFMPEG version 3.4.4 and higher
- NodeJs v8.12.0 and higher

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

```bash
// using npm

$ npm install ffmpegdotjs

// using yarn

$ yarn add ffmpegdotjs
```

## API Methods

- [x] Video Conversion
- [x] Thumbnail Generation
- [x] Image Capturing
- [x] Audio Extraction
- [x] Video Compression
- [x] Overlay Image
- [x] Make Video from Audio and Images
- [x] Trim Video

## Usage

```bash
const ffmpejdotjs = require("ffmpejdotjs");

ffmpejdotjs.trimvideo("Test.mp4",0,30,"test").then((file)=>{
        console.log(file);
});
```

### License

ffmpegdotjs is [MIT licensed](./LICENSE).
