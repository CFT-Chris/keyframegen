import Matrix4D from '../math/matrix4d';
import { EasingOptions, Easing } from '../easing';
declare class Component {
    easing: string;
    duration: number;
    delay: number;
    from: ComponentCoord | number;
    to: ComponentCoord | number;
    easingObject: Easing;
    constructor(options?: ComponentOptions);
    calculateEase(ratio: number): number;
    getMatrix: (_x?: number, _y?: number) => Matrix4D;
    getEasedMatrix: (_ratio: number) => Matrix4D;
    serialize: () => ComponentOptions;
}
interface ComponentOptions extends EasingOptions {
    type?: string;
    easing?: string;
    duration?: number;
    delay?: number;
    from?: ComponentCoord | number;
    to?: ComponentCoord | number;
}
interface ComponentCoord {
    x: number;
    y: number;
}
export { Component, ComponentOptions, ComponentCoord };
