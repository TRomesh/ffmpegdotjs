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
  },

  extractaudio: (input, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input} -f mp3 -ab 192000 -vn ${output}.mp3`,
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
  compressvideo: (input, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input} -vcodec h264 -acodec mp3 ${output}.mp3`,
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
  compressvideo: (input, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input} -vcodec h264 -acodec mp3 ${output}.mp3`,
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
  addoverlayimagetime: (input1, input2, start, end, x, y, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input1} -i ${input2} -filter_complex "[0:v][1:v] overlay=${x}:${y}:enable='between(t,${start},${end})'" -pix_fmt yuv420p -c:a copy ${output}.mp4`,
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
  addoverlayimage: (input1, input2, x, y, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input1} -i ${input2} -filter_complex "[0:v][1:v] overlay=${x}:${y}" -codec:a copy ${output}.mp4`,
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
