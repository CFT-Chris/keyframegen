import { Effect, EffectOptions } from ".";

class Floating extends Effect {

  constructor(options: FloatingOptions = {}) {
    super(options);

    options = {
      pixels: -6,
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `translate(0, 0)` },
      { offset: 0.5, transform: `translate(0, ${options.pixels}px)` },
      { offset: 1, transform: `translate(0, 0)` }
    ];
  }

}

interface FloatingOptions extends EffectOptions {
  /**
   * Specifies the amount of pixels to move in the vertical direction. Defaults to **-6**.
   */
  pixels?: number
}

export { Floating, FloatingOptions };