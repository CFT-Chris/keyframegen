import { Effect, EffectOptions } from ".";

class Ringing extends Effect {

  private static readonly dftAngleNumerators = [12, 15, 18];
  private static readonly dftAngleDenominator = 22;

  constructor(options: RingingOptions = {}) {
    super(options);

    options = {
      degreesAtRest: 0, 
      degreesTwist: 22,
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `rotate(${options.degreesAtRest - Ringing.dftAngleNumerators[1] / Ringing.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.02, transform: `rotate(${options.degreesAtRest + Ringing.dftAngleNumerators[1] / Ringing.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.04, transform: `rotate(${options.degreesAtRest - Ringing.dftAngleNumerators[2] / Ringing.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.06, transform: `rotate(${options.degreesAtRest + Ringing.dftAngleNumerators[2] / Ringing.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.08, transform: `rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.1, transform: `rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.12, transform: `rotate(${options.degreesAtRest - Ringing.dftAngleNumerators[2] / Ringing.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.14, transform: `rotate(${options.degreesAtRest + Ringing.dftAngleNumerators[2] / Ringing.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.16, transform: `rotate(${options.degreesAtRest - Ringing.dftAngleNumerators[0] / Ringing.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.18, transform: `rotate(${options.degreesAtRest + Ringing.dftAngleNumerators[0] / Ringing.dftAngleDenominator * options.degreesTwist}deg)` },
      { offset: 0.2, transform: `rotate(${options.degreesAtRest})` },
      { offset: 1, transform: `rotate(${options.degreesAtRest})` }
    ];
  }

}

interface RingingOptions extends EffectOptions {
  /**
   * Specifies the rotation before and after the animation. Defaults to **0**.
   */
  degreesAtRest?: number, 
  /**
   * Specifies the amount to rotate around *degreesAtRest*. Defaults to **22**.
   */
  degreesTwist?: number
}

export { Ringing, RingingOptions };