import {Vector3} from "./Vector3";

class Matrix4 {
  elements: Float32Array;

  constructor() {
    this.elements = new Float32Array(16);
    this.identity();
  }

  set (n11: number, n12: number, n13: number, n14: number,
       n21: number, n22: number, n23: number, n24: number,
       n31: number, n32: number, n33: number, n34: number,
       n41: number, n42: number, n43: number, n44: number): Matrix4 {
    let te = this.elements;
    te[0] = n11; te[4] = n12; te[8] = n13; te[12] = n14;
    te[1] = n21; te[5] = n22; te[9] = n23; te[13] = n24;
    te[2] = n31; te[6] = n32; te[10] = n33; te[14] = n34;
    te[3] = n41; te[7] = n42; te[11] = n43; te[15] = n44;
    return this;
  }

  // Установить матрицу в единичную матрицу
  identity(): Matrix4 {
    this.set(1, 0, 0, 0,
             0, 1, 0, 0,
             0, 0, 1, 0,
             0, 0, 0, 1);
    return this;
  }

  // Установить матрицу в матрицу ортографического проецирования
  makeOrthographic(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4 {
    let te = this.elements;
    let w = 1.0 / (right - left);
    let h = 1.0 / (top - bottom);
    let p = 1.0 / (far - near);

    let x = (right + left) * w;
    let y = (top + bottom) * h;
    let z = (far + near) * p;

    te[0] = 2 * w;
    te[1] = 0;
    te[2] = 0;
    te[3] = 0;

    te[4] = 0;
    te[5] = 2 * h;
    te[6] = 0;
    te[7] = 0;

    te[8] = 0;
    te[9] = 0;
    te[10] = -2 * p;
    te[11] = 0;

    te[12] = -x;
    te[13] = -y;
    te[14] = -z;
    te[15] = 1;

    return this;
  }

  // Установить матрицу в матрицу перспективы
  makePerspective(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4 {
    let te = this.elements;
    let x = 2 * near / (right - left);
    let y = 2 * near / (top - bottom);

    let a = (right + left) / (right - left);
    let b = (top + bottom) / (top - bottom);
    let c = -(far + near) / (far - near);
    let d = -2 * far * near / (far - near);

    te[0] = x; te[4] = 0; te[8] = a; te[12] = 0;
    te[1] = 0; te[5] = y; te[9] = b; te[13] = 0;
    te[2] = 0; te[6] = 0; te[10] = c; te[14] = d;
    te[3] = 0; te[7] = 0; te[11] = -1; te[15] = 0;

    return this;
  }

  makeRotationAxis(axis: Vector3, angle: number): Matrix4 {
    let c = Math.cos(angle);
    let s = Math.sin(angle);
    let t = 1 - c;
    let x = axis.x, y = axis.y, z = axis.z;
    let tx = t * x, ty = t * y;

    this.set(tx * x + c, tx * y - s * z, tx * z + s * y, 0,
             tx * y + s * z, ty * y + c, ty * z - s * x, 0,
             tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
             0, 0, 0, 1);
    return this;
  }

  setPosition(vector: Vector3): Matrix4 {
    let te = this.elements;
    te[12] = vector.x;
    te[13] = vector.y;
    te[14] = vector.z;
    return this;
  }


}

export {Matrix4};