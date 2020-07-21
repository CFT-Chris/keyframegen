import { Effect, EffectOptions } from ".";
declare class Spinner extends Effect {
    constructor(options?: SpinnerOptions);
}
interface SpinnerOptions extends EffectOptions {
}
export { Spinner, SpinnerOptions };
