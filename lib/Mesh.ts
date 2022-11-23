import {Object3D}  from "./Object3D";
import {BufferGeometry} from "./BufferGeometry";
import {Matrix4} from "./Matrix4";

class Mesh extends Object3D {
  geometry: any;
  warframeColor: CanvasFillStrokeStyles['strokeStyle'];
  matrix: Matrix4

  constructor(geometry: BufferGeometry) {
    super()
    this.geometry = geometry;
    this.warframeColor = "white";
    this.matrix = new Matrix4();
  }
}

export {Mesh};