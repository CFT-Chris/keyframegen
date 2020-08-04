import Matrix4D from '../math/matrix4d';
import { Component, ComponentOptions } from './index';

class Rotate extends Component {
  from: number = 0;
  to: number = 90;

  diff: number;

  constructor(options: ComponentOptions = {}) {
    super(options);
    
    this.from = (options.from as number)|| this.from;
    this.to = (options.to as number) || this.to;
    this.diff = this.to - this.from;
  }

  getMatrix = (degrees: number): Matrix4D => {
    const radians = (degrees / 180) * Math.PI;
    const c = Math.cos(radians);
    const s = Math.sin(radians);

    return(new Matrix4D([
      c, -s, 0, 0,
      s,  c, 0, 0,
      0,  0, 1, 0,
      0,  0, 0, 1
    ]));
  }

  getEasedMatrix = (ratio: number): Matrix4D => {
    const easedRatio = this.calculateEase(ratio);
    const easedAngle = this.from + this.diff * easedRatio;

    return(this.getMatrix(easedAngle));
  }
}

export default Rotate;