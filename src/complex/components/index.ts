import Matrix4D from '../math/matrix4d';
import EasingBounce from '../easing/bounce';
import SwayEasing from '../easing/sway';
import HardBounce from '../easing/hardbounce';
import HardSwayEasing from '../easing/hardsway';
import { EasingOptions, Easing } from '../easing';

type EasingType = 'bounce' | 'sway' | 'hardbounce' | 'hardsway';

class Component {

  private static readonly EasingClasses: { [type: string]: any } = {
    bounce: EasingBounce,
    sway: SwayEasing,
    hardbounce: HardBounce,
    hardsway: HardSwayEasing
  };

  easing: string = 'bounce';
  duration: number = 1000;
  delay: number = 0;
  from: Coordinate | number = null;
  to: Coordinate | number = null;
  easingObject: Easing;

  constructor(options: ComponentOptions = {}) {
    this.easing = options.easing || this.easing;
    this.duration = options.duration || this.duration;
    this.delay = options.delay || this.delay;

    this.easingObject = new Component.EasingClasses[this.easing](options);
  }

  calculateEase(ratio: number): number {
    return(this.easingObject.calculate(ratio));
  }

  getMatrix = (_x?: number, _y?: number): Matrix4D => new Matrix4D().identity();
  getEasedMatrix = (_ratio: number): Matrix4D => this.getMatrix();
  
  serialize = (): ComponentOptions =>
    Object.assign({
      type: this.constructor.name.toLowerCase(),
      easing: this.easing,
      duration: this.duration,
      delay: this.delay,
      from: this.from,
      to: this.to
    }, this.easingObject.serialize());
}

interface ComponentOptions extends EasingOptions {
  /**
   * @internal
   */
  type?: string,
  /**
   * Easing to the apply to the animation keyframes for this component.  Defaults to **bounce**.
   */
  easing?: EasingType,
  /**
   * Duration in milliseconds of the component animation.  Defaults to **1000**.
   */
  duration?: number,
  /**
   * Milliseconds to wait prior to starting this component of the animation.  Defaults to **0**.
   */
  delay?: number,
  /**
   * Starting point of the animation component.  Default depends on animation component chosen.
   */
  from?: Coordinate | number,
  /**
   * Ending point of the animation component.  Default depends on animation component chosen.
   */
  to?: Coordinate | number
}

interface Coordinate {
  x: number,
  y: number
}

export { Component, ComponentOptions, Coordinate };
