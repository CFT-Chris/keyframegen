import { Effect, EffectOptions } from ".";
declare class Vertical extends Effect {
    constructor(options?: VerticalOptions);
}
interface VerticalOptions extends EffectOptions {
    /**
     * Specifies the amount of pixels to move in either direction. Defaults to **3**.
     */
    pixels?: number;
}
export { Vertical, VerticalOptions };
