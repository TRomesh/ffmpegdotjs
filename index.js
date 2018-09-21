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
          resolve(output);
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
        `ffmpeg -hide_banner -loglevel quiet -i ${input} -vcodec h264 -acodec mp3 ${output}.mp4`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(output + ".mp4");
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
  },
  addoverlaytext: (input, text, x, y, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input} -vf 'drawtext=fontfile=/asset/times-new-roman.ttf:fontsize=64:fontcolor=white:borderw=3:bordercolor=black:box=0:text=${text}:x=${x}:y=${y}' ${output}.mp4`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve("test.mp4");
        }
      );
    });
  },
  addaudiotovideo: (input, audio, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${input} -i ${audio} -map 0:0 -map 1:0 -vcodec copy -acodec copy ${output}.mp4`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(`${output}.mp4`);
        }
      );
    });
  },
  addaudiotoimage: (audio, image, output) => {
    return new Promise(function(resolve, reject) {
      exec(
        `ffmpeg -hide_banner -loglevel quiet -i ${audio} -loop 1 -f image2 -i ${image} -t 188 ${output}.mp4`,
        (error, stdout, stderr) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(`${output}.mp4`);
        }
      );
    });
  }
};

module.exports = ffmpegjs;
