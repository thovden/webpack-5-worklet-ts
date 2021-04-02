/** Worklet */

class RecorderWorkletProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    console.log("Worklet started");
  }

  process() {
    /** Chrome requires the return value to be true  to keep it alive */
    return true;
  }
}

registerProcessor("recorder-worklet", RecorderWorkletProcessor);
