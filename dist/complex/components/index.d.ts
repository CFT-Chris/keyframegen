import Matrix4D from '../math/matrix4d';
import { EasingOptions, Easing } from '../easing';
declare type EasingType = 'bounce' | 'sway' | 'hardbounce' | 'hardsway';
declare class Component {
    protected readonly componentType: string;
    private static readonly EasingClasses;
    easing: string;
    duration: number;
    delay: number;
    from: Coordinate | number;
    to: Coordinate | number;
    easingObject: Easing;
    constructor(options?: ComponentOptions);
    calculateEase(ratio: number): number;
    getMatrix: (_x?: number, _y?: number) => Matrix4D;
    getEasedMatrix: (_ratio: number) => Matrix4D;
    serialize: () => ComponentOptions;
}
interface ComponentOptions extends EasingOptions {
    /**
     * @internal
     */
    type?: string;
    /**
     * Easing to the apply to the animation keyframes for this component.  Defaults to **bounce**.
     */
    easing?: EasingType;
    /**
     * Duration in milliseconds of the component animation.  Defaults to **1000**.
     */
    duration?: number;
    /**
     * Milliseconds to wait prior to starting this component of the animation.  Defaults to **0**.
     */
    delay?: number;
    /**
     * Starting point of the animation component.  Default depends on animation component chosen.
     */
    from?: Coordinate | number;
    /**
     * Ending point of the animation component.  Default depends on animation component chosen.
     */
    to?: Coordinate | number;
}
interface Coordinate {
    x: number;
    y: number;
}
export { Component, ComponentOptions, Coordinate };
