import { Effect, EffectOptions } from ".";
declare class Horizontal extends Effect {
    constructor(options?: HorizontalOptions);
}
interface HorizontalOptions extends EffectOptions {
    /**
     * Specifies the amount of pixels to move in either direction. Defaults to **3**.
     */
    pixels?: number;
}
export { Horizontal, HorizontalOptions };
