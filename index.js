const { exec } = require("child_process");
const fs = require("fs");

const filestostring = array => {
  let attr = "";
  try {
    if (Array.isArray(array) || array.length) {
      array.map((file, i) => {
        if (fs.existsSync(file)) {
          if (array.length === i + 1) {
            attr = attr.concat(file);
          } else {
            attr = attr.concat(file + "|");
          }
        } else {
          if (attr.indexOf("|") > -1) {
            attr = attr.slice(0, attr.lastIndexOf("|"));
            attr = undefined;
          }
          throw new Error(`ffmpegdotjs could not find file ${file} in Array`);
        }
      });
    }
  } catch (error) {
    return error;
  }
  return attr;
};

const ffmpegjs = {
  generateimage: (input, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input} -ss 00:00:21 -vsync 0 -frames:v 1 -y ${output}_%03d.png`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(output);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },

  convertvideo: (input, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input} -y ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(stdout);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },

  generategif: (input, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input} -ss 15 -t 5 -vf scale=320:180 -y ${output}.gif`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(stdout);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },

  extractaudio: (input, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input} -f mp3 -ab 192000 -vn -y ${output}.mp3`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(stdout);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },
  compressvideo: (input, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input} -vcodec h264 -acodec mp3 -y ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(output + ".mp4");
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },
  addoverlayimagetime: (input1, input2, start, end, x, y, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input1) && fs.existsSync(input2)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input1} -i ${input2} -filter_complex "[0:v][1:v] overlay=${x}:${y}:enable='between(t,${start},${end})'" -pix_fmt yuv420p -c:a copy -y ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(stdout);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },
  addoverlayimage: (input1, input2, x, y, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input1) && fs.existsSync(input2)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input1} -i ${input2} -filter_complex "[0:v][1:v] overlay=${x}:${y}" -codec:a copy -y ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(stdout);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },
  addoverlaytext: (input, text, x, y, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input} -vf 'drawtext=fontfile=/asset/times-new-roman.ttf:fontsize=64:fontcolor=white:borderw=3:bordercolor=black:box=0:text=${text}:x=${x}:y=${y}' -y ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve("test.mp4");
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },
  addaudiotovideo: (input, audio, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input) && fs.existsSync(audio)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input} -i ${audio} -map 0:0 -map 1:0 -vcodec copy -acodec copy -y ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(`${output}.mp4`);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },
  addaudiotoimage: (audio, image, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(audio) && fs.existsSync(image)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${audio} -loop 1 -f image2 -i ${image} -t 188 -y ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(`${output}.mp4`);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },
  trimvideo: (input, start, duration, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -ss ${start} -i ${input} -t ${duration} -c copy -y ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(`${output}.mp4`);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  },

  concatvideos: (inputs, output) => {
    return new Promise(function(resolve, reject) {
      let files = filestostring(inputs);
      exec(
        `ffmpeg -hide_banner -loglevel quiet -f -i "concat:${files}" -c copy -y ${output}.mp4`,
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
  mergevideos: (input1, input2, output) => {
    return new Promise(function(resolve, reject) {
      if (fs.existsSync(input1) && fs.existsSync(input2)) {
        exec(
          `ffmpeg -hide_banner -loglevel quiet -i ${input1} -i ${input2} -filter_complex hstack ${output}.mp4`,
          (error, stdout, stderr) => {
            if (error) {
              reject(error);
              return;
            }
            resolve(`${output}.mp4`);
          }
        );
      } else {
        reject(new Error("ffmpegdotjs could not find file"));
      }
    });
  }
};

module.exports = ffmpegjs;
