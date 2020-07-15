declare class Matrix4D {
    private _array;
    constructor(array?: number[]);
    equals(matrix: Matrix4D): Boolean;
    identity(): Matrix4D;
    multiply(matrix: Matrix4D): Matrix4D;
    transpose(): Matrix4D;
    get(row: number, column: number): number;
    set(row: number, column: number, value: number): number;
    copy(matrix: Matrix4D): Matrix4D;
    getArray(): number[];
    setArray(array: number[]): Matrix4D;
    toString(): string;
    toFixed(n: number): Matrix4D;
}
export default Matrix4D;
