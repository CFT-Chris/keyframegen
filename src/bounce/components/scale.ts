import Matrix4D from '../math/matrix4d';
import Vector2D from '../math/vector2d';

import { Component, ComponentCoord, ComponentOptions } from './index';

class Scale extends Component {
  from: ComponentCoord = {
    x: 0.5,
    y: 0.5
  };

  to: ComponentCoord = {
    x: 1, 
    y: 1
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

  getMatrix = (x: number, y: number): Matrix4D => 
    new Matrix4D([
      x, 0, 0, 0,
      0, y, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ]);

  getEasedMatrix = (ratio: number): Matrix4D => {
    const easedRatio = this.calculateEase(ratio);
    const easedVector = this.fromVector.clone().add(this.diff.clone().multiply(easedRatio));

    return(this.getMatrix(easedVector.x, easedVector.y));
  }
}

export default Scale;