import { Effect, EffectOptions } from ".";

class Tada extends Effect {

  constructor(options: TadaOptions = {}) {
    super(options);

    options = {
      degreesAtRest: 0, 
      degreesTwist: 4,
      scaleGrow: 1.1,
      scaleShrink: 0.95,
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `scale(1) rotate(${options.degreesAtRest}deg)` },
      { offset: 0.1, transform: `scale(${options.scaleShrink}) rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.2, transform: `scale(${options.scaleShrink}) rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.3, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.4, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.5, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.6, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest - options.degreesTwist}deg)` },
      { offset: 0.7, transform: `scale(${options.scaleGrow}) rotate(${options.degreesAtRest + options.degreesTwist}deg)` },
      { offset: 0.8, transform: `scale(1) rotate(${options.degreesAtRest}deg)` },
      { offset: 1, transform: `scale(1) rotate(${options.degreesAtRest}deg)` }
    ];
  }

}

interface TadaOptions extends EffectOptions {
  /**
   * Specifies the rotation before and after the animation. Defaults to **0**.
   */
  degreesAtRest?: number, 
  /**
   * Specifies the amount to rotate around *degreesAtRest*. Defaults to **4**.
   */
  degreesTwist?: number, 
  /**
   * Specifies the upper limit of the scale transform used for the pulsation effect. Defaults to **1.1**.
   */
  scaleGrow?: number, 
  /**
   * Specifies the lower limit of the scale transform used for the pulsation effect. Defaults to **0.95**.
   */
  scaleShrink?: number
}

export { Tada, TadaOptions };