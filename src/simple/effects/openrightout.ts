import { Effect, EffectOptions } from ".";

class OpenRightOut extends Effect {

  constructor(options: OpenRightOutOptions = {}) {
    super(options);

    options = {
      transformOrigin: 'top right',
      degreesTwist: -110,
      ...options
    };

    this.keyframes = [
      { offset: 0, opacity: 1, 'transform-origin': options.transformOrigin, transform: `rotate(0deg)`, easing: 'ease-out' },
      { offset: 1, opacity: 0, 'transform-origin': options.transformOrigin, transform: `rotate(-110deg)`, easing: 'ease-in-out' }
    ];    
  }

}

interface OpenRightOutOptions extends EffectOptions {
  /**
   * Specifies the point to rotate around. Defaults to **top right**.
   */
  transformOrigin?: string,
  /**
   * Specifies the amount to rotate. Defaults to **-110**.
   */
  degreesTwist?: number
}

export { OpenRightOut, OpenRightOutOptions };