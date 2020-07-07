class Vector2D {
    constructor(x = 0, y = 0) {
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    add(v) {
        if (v instanceof Vector2D) {
            this.x += v.x;
            this.y += v.y;
            return (this);
        }
        else
            return (this.addScalar(v));
    }
    addScalar(n) {
        this.x += n;
        this.y += n;
        return (this);
    }
    subtract(v) {
        if (v instanceof Vector2D) {
            this.x -= v.x;
            this.y -= v.y;
            return (this);
        }
        else
            return (this.subtractScalar(v));
    }
    subtractScalar(n) {
        this.x -= n;
        this.y -= n;
        return (this);
    }
    multiply(v) {
        if (v instanceof Vector2D) {
            this.x *= v.x;
            this.y *= v.y;
            return (this);
        }
        else
            return (this.multiplyScalar(v));
    }
    multiplyScalar(n) {
        this.x *= n;
        this.y *= n;
        return (this);
    }
    divide(v) {
        if (v instanceof Vector2D) {
            this.x /= v.x;
            this.y /= v.y;
            return (this);
        }
        else
            return (this.divideScalar(v));
    }
    divideScalar(n) {
        return (this.multiplyScalar(1 / n));
    }
    clone() {
        return (new Vector2D(this.x, this.y));
    }
    copy(vector) {
        this.x = vector.x;
        this.y = vector.y;
        return (this);
    }
    equals(vector) {
        return (vector.x === this.x && vector.y === this.y);
    }
    toString() {
        return (`(${this.x}, ${this.y})`);
    }
    toFixed(n) {
        this.x = parseFloat(this.x.toFixed(n));
        this.y = parseFloat(this.y.toFixed(n));
        return (this);
    }
    toArray() {
        return ([this.x, this.y]);
    }
    static isVector2D(item) {
        return (item instanceof Vector2D);
    }
}
export default Vector2D;
//# sourceMappingURL=vector2d.js.map