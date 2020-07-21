import { Effect, EffectOptions } from ".";

class Wrench extends Effect {

  constructor(options: WrenchOptions = {}) {
    super(options);

    options = {
      degreesAtRest: 0, 
      degreesTwist: 24,
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `rotate(${options.degreesAtRest - options.degreesTwist / 2}deg)` },
      { offset: 0.08, transform: `rotate(${options.degreesAtRest + options.degreesTwist / 2}deg)` },
      { offset: 0.1, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.18, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.2, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.28, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.38, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.48, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.5, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.58, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.6, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.68, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.75, transform: `rotate(${options.degreesAtRest}deg)` },
      { offset: 1.0, transform: `rotate(${options.degreesAtRest}deg)` }
    ];
  }

}

interface WrenchOptions extends EffectOptions {
  /**
   * Specifies the rotation before and after the animation. Defaults to **0**.
   */
  degreesAtRest?: number, 
  /**
   * Specifies the amount to rotate around *degreesAtRest*. Defaults to **24**.
   */
  degreesTwist?: number
}

export { Wrench, WrenchOptions };