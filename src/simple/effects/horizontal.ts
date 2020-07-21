import { Effect, EffectOptions } from ".";

class Horizontal extends Effect {

  constructor(options: HorizontalOptions = {}) {
    super(options);

    options = {
      pixels: 3,
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `translate(${-options.pixels}px, 0)` },
      { offset: 0.04, transform: `translate(${options.pixels}px, 0)` },
      { offset: 0.08, transform: `translate(${-options.pixels}px, 0)` },
      { offset: 0.12, transform: `translate(${options.pixels}px, 0)` },
      { offset: 0.16, transform: `translate(${-options.pixels}px, 0)` },
      { offset: 0.2, transform: `translate(${options.pixels}px, 0)` },
      { offset: 0.22, transform: `translate(0, 0)` },
      { offset: 1, transform: `translate(0, 0)` }
    ];
  }

}

interface HorizontalOptions extends EffectOptions {
  /**
   * Specifies the amount of pixels to move in either direction. Defaults to **3**.
   */
  pixels?: number
}

export { Horizontal, HorizontalOptions };