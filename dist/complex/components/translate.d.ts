import Matrix4D from '../math/matrix4d';
import Vector2D from '../math/vector2d';
import { Component, Coordinate, ComponentOptions } from './index';
declare class Translate extends Component {
    from: Coordinate;
    to: Coordinate;
    fromVector: Vector2D;
    toVector: Vector2D;
    diff: Vector2D;
    constructor(options?: ComponentOptions);
    getMatrix: (x: number, y: number) => Matrix4D;
    getEasedMatrix: (ratio: number) => Matrix4D;
}
export default Translate;
