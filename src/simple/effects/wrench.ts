import { Effect, EffectOptions } from ".";

class Wrench extends Effect {

  constructor(options: WrenchOptions) {
    super(options);

    this.keyframes = [
      { offset: 0 }
    ];
  }

}

interface WrenchOptions extends EffectOptions {

}

export { Wrench, WrenchOptions };