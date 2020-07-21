import { Effect, EffectOptions } from ".";

class Pulse extends Effect {

  constructor(options: PulseOptions = {}) {
    super(options);

    options = {
      scaleAtRest: 1,
      scaleShrink: 0.73,
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `scale(${options.scaleAtRest})` },
      { offset: 0.5, transform: `scale(${options.scaleShrink})` },
      { offset: 1, transform: `scale(${options.scaleAtRest})` }
    ];
  }

}

interface PulseOptions extends EffectOptions {
  /**
   * Defaults to **1**.
   */
  scaleAtRest?: number, 
  /**
   * Specifies the lower limit of the scale transform used for the pulsation effect. Defaults to **0.73**.
   */
  scaleShrink?: number
}

export { Pulse, PulseOptions };