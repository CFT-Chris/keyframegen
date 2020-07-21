import { Effect, EffectOptions } from ".";
declare class Flashing extends Effect {
    constructor(options?: FlashingOptions);
}
interface FlashingOptions extends EffectOptions {
}
export { Flashing, FlashingOptions };
