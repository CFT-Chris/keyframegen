import Matrix4D from '../math/matrix4d';
import EasingBounce from '../easing/bounce';
import SwayEasing from '../easing/sway';
import HardBounce from '../easing/hardbounce';
import HardSwayEasing from '../easing/hardsway';
import { EasingOptions, Easing } from '../easing';

const EasingClasses: { [type: string]: any } = {
  bounce: EasingBounce,
  sway: SwayEasing,
  hardbounce: HardBounce,
  hardsway: HardSwayEasing
};

class Component {
  easing: string = 'bounce';
  duration: number = 1000;
  delay: number = 0;
  from: ComponentCoord | number = null;
  to: ComponentCoord | number = null;
  easingObject: Easing;

  constructor(options: ComponentOptions = {}) {
    Object.assign(this, options);

    this.easingObject = new EasingClasses[this.easing](options);
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
  type?: string,
  easing?: string,
  duration?: number,
  delay?: number,
  from?: ComponentCoord | number,
  to?: ComponentCoord | number
}

interface ComponentCoord {
  x: number,
  y: number
}

export { Component, ComponentOptions, ComponentCoord };
