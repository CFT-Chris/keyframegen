import { Effect, EffectOptions } from ".";

class Burst extends Effect {

  constructor(options: BurstOptions = {}) {
    super(options);

    options = {
      opacityStart: 0.6,
      scaleGrow: 1.8,
      ...options
    };

    this.keyframes = [
      { offset: 0, opacity: options.opacityStart },
      { offset: 0.5, opacity: 0, transform: `scale(${options.scaleGrow})` },
      { offset: 1, opacity: 0 }
    ];
  }

}

interface BurstOptions extends EffectOptions {
  /**
   * Specifies the starting opacity. Defaults to **0.6**.
   */
  opacityStart?: number,
  /**
   * Specifies the upper limit of the scale transform. Defaults to **1.8**.
   */
  scaleGrow?: number
}

export { Burst, BurstOptions };