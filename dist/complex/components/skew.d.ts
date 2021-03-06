import Matrix4D from '../math/matrix4d';
import Vector2D from '../math/vector2d';
import { Component, Coordinate, ComponentOptions } from './index';
declare class Skew extends Component {
    protected readonly componentType: string;
    from: Coordinate;
    to: Coordinate;
    fromVector: Vector2D;
    toVector: Vector2D;
    diff: Vector2D;
    constructor(options?: ComponentOptions);
    getMatrix: (degreesX: number, degreesY: number) => Matrix4D;
    getEasedMatrix: (ratio: number) => Matrix4D;
}
export default Skew;
