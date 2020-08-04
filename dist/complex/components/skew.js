import Matrix4D from '../math/matrix4d';
import Vector2D from '../math/vector2d';
import { Component } from './index';
class Skew extends Component {
    constructor(options = {}) {
        super(options);
        this.from = {
            x: 0,
            y: 0
        };
        this.to = {
            x: 20,
            y: 0
        };
        this.getMatrix = (degreesX, degreesY) => {
            const radiansX = (degreesX / 180) * Math.PI;
            const radiansY = (degreesY / 180) * Math.PI;
            const tx = Math.tan(radiansX);
            const ty = Math.tan(radiansY);
            return (new Matrix4D([
                1, tx, 0, 0,
                ty, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            ]));
        };
        this.getEasedMatrix = (ratio) => {
            const easedRatio = this.calculateEase(ratio);
            const easedVector = this.fromVector.clone().add(this.diff.clone().multiply(easedRatio));
            return (this.getMatrix(easedVector.x, easedVector.y));
        };
        this.from = options.from || this.from;
        this.to = options.to || this.to;
        this.fromVector = new Vector2D(this.from.x, this.from.y);
        this.toVector = new Vector2D(this.to.x, this.to.y);
        this.diff = this.toVector.clone().subtract(this.fromVector);
    }
}
export default Skew;
//# sourceMappingURL=skew.js.map