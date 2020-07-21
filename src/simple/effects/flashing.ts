import { Effect, EffectOptions } from ".";

class Flashing extends Effect {

  constructor(options: FlashingOptions = {}) {
    super(options);

    options = {
      ...options
    };

    this.keyframes = [
      { offset: 0, opacity: 1 },
      { offset: 0.25, opacity: 0 },
      { offset: 0.5, opacity: 1 },
      { offset: 0.75, opacity: 0 },
      { offset: 1, opacity: 1 }
    ]; 
  }

}

interface FlashingOptions extends EffectOptions {
  // no options
}

export { Flashing, FlashingOptions };