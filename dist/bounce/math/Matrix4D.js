class Matrix4D {
    constructor(array) {
        this._array = array ? array.slice() : [
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
            0, 0, 0, 0,
        ];
    }
    equals(matrix) {
        return (this.toString() === matrix.toString());
    }
    identity() {
        this.setArray([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
        return (this);
    }
    multiply(matrix) {
        const res = new Matrix4D();
        for (let i = 0; i < 4; i++)
            for (let j = 0; j < 4; j++)
                for (let k = 0; k < 4; k++)
                    res.set(i, j, res.get(i, j) + this.get(i, k) * matrix.get(k, j));
        return (this.copy(res));
    }
    transpose() {
        const a = this.getArray();
        this.setArray([
            a[0], a[4], a[8], a[12],
            a[1], a[5], a[9], a[13],
            a[2], a[6], a[10], a[14],
            a[3], a[7], a[11], a[15]
        ]);
        return (this);
    }
    get(row, column) {
        return (this.getArray()[row * 4 + column]);
    }
    set(row, column, value) {
        return (this._array[row * 4 + column] = value);
    }
    copy(matrix) {
        this._array = matrix.getArray();
        return (this);
    }
    getArray() {
        return (this._array.slice());
    }
    setArray(array) {
        this._array = array;
        return (this);
    }
    toString() {
        return (`(${this.getArray().join(', ')})`);
    }
    toFixed(n) {
        this._array = this._array.map((value) => parseFloat(value.toFixed(n)));
        return (this);
    }
}
export default Matrix4D;
//# sourceMappingURL=Matrix4D.js.map