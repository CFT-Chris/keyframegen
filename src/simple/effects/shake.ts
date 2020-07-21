import { Effect, EffectOptions } from ".";

class Shake extends Effect {

  private static readonly dftAngleNumerators = [12, 15, 18];
  private static readonly dftAngleDenominator = 22;

  constructor(options: ShakeOptions = {}) {
    super(options);

    options = {
      degreesAtRest: 0, 
      degreesTwist: 22,
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `rotate(${options.degreesAtRest - Shake.dftAngleNumerators[1] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.1, transform: `rotate(${options.degreesAtRest + Shake.dftAngleNumerators[1] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.2, transform: `rotate(${options.degreesAtRest - Shake.dftAngleNumerators[2] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.3, transform: `rotate(${options.degreesAtRest + Shake.dftAngleNumerators[2] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.4, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.5, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.6, transform: `rotate(${options.degreesAtRest - Shake.dftAngleNumerators[2] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.7, transform: `rotate(${options.degreesAtRest + Shake.dftAngleNumerators[2] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.8, transform: `rotate(${options.degreesAtRest - Shake.dftAngleNumerators[0] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.9, transform: `rotate(${options.degreesAtRest + Shake.dftAngleNumerators[0] / Shake.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 1, transform: `rotate(${options.degreesAtRest})` }
    ];
  }

}

interface ShakeOptions extends EffectOptions {
  degreesAtRest?: number, 
  degreesTwist?: number
}

export { Shake, ShakeOptions };