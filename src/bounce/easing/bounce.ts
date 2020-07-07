import { Easing, EasingOptions } from './index';

class BounceEasing extends Easing {
  bounces: number = 4;
  stiffness: number = 3;
  alpha: number;
  limit: number;
  omega: number;

  constructor(options: EasingOptions = {}) {
    super();

    let threshold;

    Object.assign(this, options);

    this.alpha = this.stiffness / 100;
    threshold = 0.005 / Math.pow(10, this.stiffness);
    this.limit = Math.floor(Math.log(threshold) / -this.alpha);
    this.omega = this.calculateOmega(this.bounces, this.limit);
  }

  calculate(ratio: number): number {
    if (ratio >= 1)
      return 1;
    
    const t = ratio * this.limit;
    return(1 - this.exponent(t) * this.oscillation(t));
  }

  calculateOmega = (bounces: number, limit: number): number => ((bounces + 0.5) * Math.PI / limit);
  exponent = (t: number): number => (Math.pow(Math.E, -this.alpha * t));
  oscillation = (t: number): number => (Math.cos(this.omega * t));
  serialize = () => ({ 
    stiffness: this.stiffness, 
    bounces: this.bounces
  });
}

export default BounceEasing;