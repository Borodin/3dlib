import {Matrix4} from "./Matrix4";

class Vector3 {
  x: number;
  y: number;
  z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  set(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  // Добавляет вектор к этому вектору и возвращает этот вектор
  add(v: Vector3): Vector3 {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  // Вычитает вектор из этого вектора и возвращает этот вектор
  sub(v: Vector3): Vector3 {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  // Возвращает произведение вектора на вектор и возвращает этот вектор
  multiply(v: Vector3): Vector3 {
    this.x *= v.x;
    this.y *= v.y;
    this.z *= v.z;
    return this;
  }

  // Умножить вектор на скаляр и возвращает этот вектор
  multiplyScalar(scalar: number): Vector3 {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;
    return this;
  }

  // Делит этот вектор на вектор и возвращает этот вектор
  divide(v: Vector3) {
    this.x /= v.x;
    this.y /= v.y;
    this.z /= v.z;
    return this;
  }

  // Делит этот вектор на скаляр и возвращает этот вектор
  divideScalar(scalar: number) {
    return this.multiplyScalar(1 / scalar);
  }

  // Вычислите скалярное произведение этого вектора и v
  dot(v: Vector3) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  // Вычисляет квадрат евклидовой длины этого вектора
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  // Вычисляет евклидову длину этого вектора
  length() {
    return Math.sqrt(this.lengthSq());
  }

  // Нормализует этот вектор
  normalize() {
    return this.divideScalar(this.length());
  }

  // Устанавливает этот вектор из масива
  fromArray(array: number[], offset: number = 0) {
    this.x = array[offset];
    this.y = array[offset + 1];
    this.z = array[offset + 2];
    return this;
  }

  //
  applyMatrix4(m: Matrix4) {
    const x = this.x, y = this.y, z = this.z;
    const e = m.elements;
    const w = 1 / (e[3] * x + e[7] * y + e[11] * z + e[15]);

    this.x = (e[0] * x + e[4] * y + e[8] * z + e[12]) * w;
    this.y = (e[1] * x + e[5] * y + e[9] * z + e[13]) * w;
    this.z = (e[2] * x + e[6] * y + e[10] * z + e[14]) * w;

    return this;
  }

}

export {
  Vector3
}