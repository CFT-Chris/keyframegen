import { Effect, EffectOptions } from ".";
declare class Falling extends Effect {
    constructor(options?: FallingOptions);
}
interface FallingOptions extends EffectOptions {
}
export { Falling, FallingOptions };
