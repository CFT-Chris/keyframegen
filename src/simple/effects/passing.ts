import { Effect, EffectOptions } from ".";

class Passing extends Effect {

  constructor(options: PassingOptions = {}) {
    super(options);

    options = {
      ...options
    };

    this.keyframes = [
      { offset: 0, opacity: 0, transform: 'translate(-50%, 0)' },
      { offset: 0.5, opacity: 1, transform: 'translate(0, 0)' },
      { offset: 1, opacity: 0, transform: 'translate(50%, 0)' }
    ]; 
  }

}

interface PassingOptions extends EffectOptions {
  // no options
}

export { Passing, PassingOptions };