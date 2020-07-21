import { Effect, EffectOptions } from ".";

class Spinner extends Effect {

  constructor(options: SpinnerOptions = {}) {
    super(options);

    options = {
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `rotate(0deg)` },
      { offset: 1, transform: `rotate(359deg)` }
    ];
  }

}

interface SpinnerOptions extends EffectOptions {
  // No options
}

export { Spinner, SpinnerOptions };