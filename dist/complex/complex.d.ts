import { Component, ComponentOptions } from './components';
import { KeyframeGenerator, WebAPIKeyframe, KeyframeOptions } from '../keyframegen';
/**
 * Construct a complex 2D animation using a composition of any number of the following transforms:
 * * scale
 * * rotate
 * * translate
 * * skew
 *
 * See {@link ComponentOptions} for a list of options that can be applied per transformation component.
 *
 * ## Basic Usage
 * ```ts
 * new Complex()
 *   .scale({ from: 0.5, to: 1, duration: 250 })
 *   .rotate({ from: -90, to: 0, delay: 250, duration: 500 })
 *   .get();
 * ```
 */
declare class Complex extends KeyframeGenerator {
    protected static readonly ComponentClasses: {
        [type: string]: any;
    };
    protected static FPS: number;
    protected components: Component[];
    protected keys: number[];
    constructor();
    scale: (options?: ComponentOptions) => this;
    rotate: (options?: ComponentOptions) => this;
    translate: (options?: ComponentOptions) => this;
    skew: (options?: ComponentOptions) => this;
    private addComponent;
    protected serialize: () => any[];
    protected deserialize(serialized: ComponentOptions[]): this;
    protected updateDuration(): void;
    protected getWebAPIKeyframes(options?: KeyframeOptions): WebAPIKeyframe[];
    private getKeyframes;
}
export { Complex };
