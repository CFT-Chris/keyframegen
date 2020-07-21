import { Effect, EffectOptions } from ".";

class Falling extends Effect {

  constructor(options: FallingOptions = {}) {
    super(options);

    options = {
      ...options
    };

    this.keyframes = [
      { offset: 0, opacity: 0, transform: 'translate(0, -50%)' },
      { offset: 0.5, opacity: 1, transform: 'translate(0, 0)' },
      { offset: 1, opacity: 0, transform: 'translate(0, 50%)' }
    ]; 
  }
}

interface FallingOptions extends EffectOptions {
  // no options
}

export { Falling, FallingOptions };