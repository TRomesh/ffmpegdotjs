const ffmpejdotjs = require("../index");

test.skip("Compress video", async done => {
  try {
    let data = await ffmpejdotjs.compressvideo(
      "TensorFlow-for-Beginners.mp4",
      "test"
    );
    done();
  } catch (error) {
    throw error;
  }
});

test.skip("Genereate thumbnail from video ", async () => {
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

test.skip("Add text to video ", async () => {
  try {
    let data = await ffmpejdotjs.addoverlaytext(
      "TensorFlow-for-Beginners.mp4",
      "TEST",
      20,
      20,
      "test"
    );
    expect(data).toBe("test.mp4");
  } catch (error) {
    throw error;
  }
});

test.skip("Add image to video", async () => {
  try {
    let data = await ffmpejdotjs.addoverlayimage(
      "TensorFlow-for-Beginners.mp4",
      "logo.png",
      20,
      20,
      "test"
    );
    expect(data).toBe("test.mp4");
  } catch (error) {
    throw error;
  }
});

test.skip("Add audio to image ", async () => {
  try {
    let data = await ffmpejdotjs.addaudiotoimage(
      "ubuntu.mp3",
      "logo.png",
      "testaudio"
    );
    expect(data).toBe("testaudio.mp4");
  } catch (error) {
    throw error;
  }
});

test.skip("Trim video ", async () => {
  try {
    let data = await ffmpejdotjs.trimvideo(
      "TensorFlow-for-Beginners.mp4",
      0,
      30,
      "test"
    );
    expect(data).toBe("test.mp4");
  } catch (error) {
    throw error;
  }
});

test.skip("Concat video ", async () => {
  try {
    let data = await ffmpejdotjs.concatvideos(
      ["testaudio.mp4", "test.mp4"],
      "test123"
    );
    expect(data).toBe("test123.mp4");
  } catch (error) {
    throw error;
  }
});

test("Merge video ", async () => {
  try {
    let data = await ffmpejdotjs.mergevideos(
      "testaudio.mp4",
      "test.mp4",
      "test123"
    );
    expect(data).toBe("test123.mp4");
  } catch (error) {
    throw error;
  }
});
