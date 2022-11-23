import {Object3D} from "./Object3D";
import {Matrix4} from "./Matrix4";

class Camera  extends Object3D {
  projectionMatrix: Matrix4;

  constructor() {
    super();
    this.projectionMatrix = new Matrix4();
  }

}

export {Camera};