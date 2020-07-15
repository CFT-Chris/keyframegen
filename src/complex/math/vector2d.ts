class Vector2D {
  x: number = 0;
  y: number = 0;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  add(v: Vector2D | number): Vector2D {
    if (v instanceof Vector2D) {
      this.x += v.x;
      this.y += v.y;
      
      return(this);
    }
    else
      return(this.addScalar(v));
  }

  private addScalar(n: number): Vector2D {
    this.x += n;
    this.y += n;

    return(this);
  }

  subtract(v: Vector2D | number): Vector2D {
    if (v instanceof Vector2D) {
      this.x -= v.x;
      this.y -= v.y;
      
      return(this);
    }
    else
      return(this.subtractScalar(v));
  }

  private subtractScalar(n: number): Vector2D {
    this.x -= n;
    this.y -= n;

    return(this);
  }

  multiply(v: Vector2D | number): Vector2D {
    if (v instanceof Vector2D) {
      this.x *= v.x;
      this.y *= v.y;
      
      return(this);
    }
    else
      return(this.multiplyScalar(v));
  }

  private multiplyScalar(n: number): Vector2D {
    this.x *= n;
    this.y *= n;

    return(this);
  }

  divide(v: Vector2D | number): Vector2D {
    if (v instanceof Vector2D) {
      this.x /= v.x;
      this.y /= v.y;
      
      return(this);
    }
    else
      return(this.divideScalar(v));
  }

  private divideScalar(n: number): Vector2D {
    return(this.multiplyScalar(1 / n));
  }

  clone(): Vector2D {
    return(new Vector2D(this.x, this.y));
  }

  copy(vector: Vector2D): Vector2D {
    this.x = vector.x;
    this.y = vector.y;

    return(this);
  }

  equals(vector: Vector2D): boolean {
    return(vector.x === this.x && vector.y === this.y);
  }

  toString(): string {
    return(`(${this.x}, ${this.y})`);
  }

  toFixed(n: number): Vector2D {
    this.x = parseFloat(this.x.toFixed(n));
    this.y = parseFloat(this.y.toFixed(n));

    return(this);
  }

  toArray(): number[] {
    return([this.x, this.y]);
  }

  static isVector2D(item: any): boolean {
    return(item instanceof Vector2D);
  }
}

export default Vector2D;