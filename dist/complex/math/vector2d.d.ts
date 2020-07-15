declare class Vector2D {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    add(v: Vector2D | number): Vector2D;
    private addScalar;
    subtract(v: Vector2D | number): Vector2D;
    private subtractScalar;
    multiply(v: Vector2D | number): Vector2D;
    private multiplyScalar;
    divide(v: Vector2D | number): Vector2D;
    private divideScalar;
    clone(): Vector2D;
    copy(vector: Vector2D): Vector2D;
    equals(vector: Vector2D): boolean;
    toString(): string;
    toFixed(n: number): Vector2D;
    toArray(): number[];
    static isVector2D(item: any): boolean;
}
export default Vector2D;
