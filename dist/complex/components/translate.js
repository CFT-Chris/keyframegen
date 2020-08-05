import Matrix4D from '../math/matrix4d';
import Vector2D from '../math/vector2d';
import { Component } from './index';
class Translate extends Component {
    constructor(options = {}) {
        super(options);
        this.componentType = 'translate';
        this.from = {
            x: 0,
            y: 0
        };
        this.to = {
            x: 0,
            y: 0
        };
        this.getMatrix = (x, y) => new Matrix4D([
            1, 0, 0, x,
            0, 1, 0, y,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
        this.getEasedMatrix = (ratio) => {
            const easedRatio = this.calculateEase(ratio);
            const easedAngle = this.fromVector.clone().add(this.diff.clone().multiply(easedRatio));
            return (this.getMatrix(easedAngle.x, easedAngle.y));
        };
        this.from = options.from || this.from;
        this.to = options.to || this.to;
        this.fromVector = new Vector2D(this.from.x, this.from.y);
        this.toVector = new Vector2D(this.to.x, this.to.y);
        this.diff = this.toVector.clone().subtract(this.fromVector);
    }
}
export default Translate;
//# sourceMappingURL=translate.js.map