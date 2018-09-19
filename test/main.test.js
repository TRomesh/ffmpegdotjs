const ffmpejdotjs = require("../index");

const compress = async (input, output) => {
  try {
    return await ffmpejdotjs.compressvideo(input, output);
  } catch (error) {
    return "error";
  }
};

test("Video Compression", () => {
  expect(compress("TensorFlow-for-Beginners.mp4", "test")).toBe("test.mp4");
});
