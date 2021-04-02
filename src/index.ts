declare global {
  interface Window {
    start(): void;
  }
}
window.start = () => {
  const context = new AudioContext();
  context.resume();

  // Strategy A - use an URL
  const audioWorklet = new URL("./recorder.worklet", import.meta.url);
  context.audioWorklet
    .addModule(audioWorklet.href)
    .then(() => {
      const recorderNode = new window.AudioWorkletNode(
        context,
        "recorder-worklet"
      );
      console.log("Strategy A Success - running audio worklet");
    })
    .catch((err) => console.error("Strategy A Failed", err));

  // Strategy B - use magic parser worker trick in webpack.config.js
  const magicContextName = context.audioWorklet;
  magicContextName
    .addModule("./recorder.worklet")
    .then(() => {
      const recorderNode = new window.AudioWorkletNode(
        context,
        "recorder-worklet"
      );
      console.log("Strategy B Success - running audio worklet");
    })
    .catch((err) => console.error("Strategy B Failed", err));
};
