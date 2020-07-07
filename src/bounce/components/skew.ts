import Matrix4D from '../math/matrix4d';
import Vector2D from '../math/vector2d';

import { Component, ComponentCoord, ComponentOptions } from './index';

class Skew extends Component {
  from: ComponentCoord = {
    x: 0,
    y: 0
  };

  to: ComponentCoord = {
    x: 20, 
    y: 0
  }

  fromVector: Vector2D;
  toVector: Vector2D;
  diff: Vector2D;

  constructor(options: ComponentOptions = {}) {
    super(options);
    this.fromVector = new Vector2D(this.from.x, this.from.y);
    this.toVector = new Vector2D(this.to.x, this.to.y);
    this.diff = this.toVector.clone().subtract(this.fromVector);
  }

  getMatrix = (degreesX: number, degreesY: number): Matrix4D => {
    const radiansX = (degreesX / 180) * Math.PI;
    const radiansY = (degreesY / 180) * Math.PI;

    const tx = Math.tan(radiansX);
    const ty = Math.tan(radiansY);
    return(new Matrix4D([
      1, tx, 0, 0,
      ty, 1, 0, 0,
      0,  0, 1, 0,
      0,  0, 0, 1
    ]));
  }

  getEasedMatrix = (ratio: number): Matrix4D => {
    const easedRatio = this.calculateEase(ratio);
    const easedVector = this.fromVector.clone().add(this.diff.clone().multiply(easedRatio));

    return(this.getMatrix(easedVector.x, easedVector.y));
  }
}

export default Skew;