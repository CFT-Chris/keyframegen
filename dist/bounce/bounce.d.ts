import Matrix4D from './math/matrix4d';
import { Component, ComponentOptions } from './components';
import { WebAPIKeyframe } from '..';
declare class Bounce {
    static FPS: number;
    static counter: number;
    components: Component[];
    duration: number;
    name: string;
    styleElement: HTMLElement;
    keys: number[];
    constructor();
    scale: (options?: ComponentOptions) => Bounce;
    rotate: (options?: ComponentOptions) => Bounce;
    translate: (options?: ComponentOptions) => Bounce;
    skew: (options?: ComponentOptions) => Bounce;
    addComponent(component: Component): Bounce;
    serialize: () => any[];
    deserialize(serialized: ComponentOptions[]): Bounce;
    updateDuration(): void;
    define(name?: string): Bounce;
    remove(): void;
    getPrefixes(force?: boolean): CSSPropPrefixes;
    getKeyframeWebAPI(options?: KeyframeOptions): WebAPIKeyframe[];
    getKeyframeCSS(options?: KeyframeOptions): string;
    getKeyframes({ optimized }?: KeyframeOptions): BounceKeyframes;
    applyTo(v: HTMLElement | HTMLElement[], options?: ApplyToOptions): Promise<void>;
    static generateName: () => string;
    static isSupported(): boolean;
}
interface CSSPropPrefixes {
    transform: string[];
    animation: string[];
}
interface KeyframeOptions {
    name?: string;
    prefix?: boolean;
    forcePrefix?: boolean;
    optimized?: boolean;
}
interface ApplyToOptions {
    loop?: boolean;
    remove?: boolean;
    onComplete?: () => any;
}
interface BounceKeyframes {
    [key: number]: Matrix4D;
}
export { Bounce };
