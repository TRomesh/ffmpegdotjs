const ffmpejdotjs = require("../index");

test("Video Compression", async () => {
  try {
    let data = await ffmpejdotjs.compressvideo(
      "TensorFlow-for-Beginners.mp4",
      "test"
    );
    expect(data).toBe("test.mp4");
  } catch (error) {
    throw error;
  }
});

test("Video Thumbnail", async () => {
  try {
    let data = await ffmpejdotjs.generateimage(
      "TensorFlow-for-Beginners.mp4",
      "test"
    );
    expect(data).toBe("test");
  } catch (error) {
    throw error;
  }
});

test.skip("Video Text", async () => {
  let data = await ffmpejdotjs.addoverlaytext(
    "TensorFlow-for-Beginners.mp4",
    "TEST",
    "test"
  );
  expect(data).toBe("test.mp4");
});
