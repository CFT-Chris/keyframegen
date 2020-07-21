import { Effect, EffectOptions } from ".";
declare class Floating extends Effect {
    constructor(options?: FloatingOptions);
}
interface FloatingOptions extends EffectOptions {
    /**
     * Specifies the amount of pixels to move in the vertical direction. Defaults to **-6**.
     */
    pixels?: number;
}
export { Floating, FloatingOptions };
