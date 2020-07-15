import { Component, ComponentOptions } from './components';
import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';
declare class Complex extends KeyframeGenerator {
    static FPS: number;
    components: Component[];
    keys: number[];
    constructor();
    scale: (options?: ComponentOptions) => Complex;
    rotate: (options?: ComponentOptions) => Complex;
    translate: (options?: ComponentOptions) => Complex;
    skew: (options?: ComponentOptions) => Complex;
    private addComponent;
    serialize: () => any[];
    deserialize(serialized: ComponentOptions[]): Complex;
    updateDuration(): void;
    protected getWebAPIKeyframes(options?: KeyframeOptions): WebAPIKeyframe[];
    private getKeyframes;
}
export { Complex };
