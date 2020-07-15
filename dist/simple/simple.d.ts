import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';
import { EffectOptions } from './effects';
import { Wrench } from './effects/wrench';
import { Tada } from './effects/tada';
declare const EffectClasses: Readonly<{
    Wrench: typeof Wrench;
    Tada: typeof Tada;
}>;
declare type SimpleEffect = keyof typeof EffectClasses;
declare class Simple extends KeyframeGenerator {
    private effect;
    constructor(effect: SimpleEffect, options?: EffectOptions);
    protected getWebAPIKeyframes(_options?: KeyframeOptions): WebAPIKeyframe[];
}
export { Simple };
