import { Effect, EffectOptions } from ".";
declare class Passing extends Effect {
    constructor(options?: PassingOptions);
}
interface PassingOptions extends EffectOptions {
}
export { Passing, PassingOptions };
