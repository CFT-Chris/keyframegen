import { Effect, EffectOptions } from ".";

class Vertical extends Effect {

  constructor(options: VerticalOptions = {}) {
    super(options);

    options = {
      pixels: 3,
      ...options
    };

    this.keyframes = [
      { offset: 0, transform: `translate(0, ${-options.pixels}px)` },
      { offset: 0.04, transform: `translate(0, ${options.pixels}px)` },
      { offset: 0.08, transform: `translate(0, ${-options.pixels}px)` },
      { offset: 0.12, transform: `translate(0, ${options.pixels}px)` },
      { offset: 0.16, transform: `translate(0, ${-options.pixels}px)` },
      { offset: 0.2, transform: `translate(0, ${options.pixels}px)` },
      { offset: 0.22, transform: `translate(0, 0)` },
      { offset: 1, transform: `translate(0, 0)` }
    ];
  }

}

interface VerticalOptions extends EffectOptions {
  /**
   * Specifies the amount of pixels to move in either direction. Defaults to **3**.
   */
  pixels?: number
}

export { Vertical, VerticalOptions };