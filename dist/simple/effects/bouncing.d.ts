import { Effect, EffectOptions } from ".";
declare class Bouncing extends Effect {
    constructor(options?: BouncingOptions);
}
interface BouncingOptions extends EffectOptions {
    /**
     * Specifies the amount of pixels to move in the vertical direction. Defaults to **-15**.
     */
    pixels?: number;
}
export { Bouncing, BouncingOptions };
