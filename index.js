const { exec } = require("child_process");

const ffmpegjs = {
  generateimage: (input, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input} -ss 00:00:21 -vsync 0 -frames:v 1 ${output}_%03d.png`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(stdout);
        }
      );
    });
  },

  convertvideo: (input, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input} ${output}.mp4`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(stdout);
        }
      );
    });
  },

  generategif: (input, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input} -ss 15 -t 5 -vf scale=320:180 ${output}.gif`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(stdout);
        }
      );
    });
  }
};

module.exports = ffmpegjs;
