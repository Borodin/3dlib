import {Vector3} from "./Vector3";
import {Matrix4} from "./Matrix4";

abstract class Object3D {
  children: Object3D[];
  parent: Object3D | null;
  position: Vector3;
  matrix: Matrix4
  renderOrder: number;
  visible: boolean;

  protected constructor() {
    this.children = [];
    this.matrix = new Matrix4();
    this.position = new Vector3(0, 0, 0);
    this.renderOrder = 0;
    this.visible = true;
  }

  add(child: Object3D) {
    this.children.push(child);
    child.parent = this;
  }
}

export {Object3D};