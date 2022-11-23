import {Camera} from "./Camera";

class PerspectiveCamera extends Camera {
  constructor(
    public fov = 90,
    public aspect = 1,
    public near = 0.01,
    public far = 1000
  ) {
    super();
    this.fov = fov;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
    this.updateProjectionMatrix();
  }

  updateProjectionMatrix() {
    const top = this.near * Math.tan((this.fov * Math.PI) / 360);
    const height = 2 * top;
    const width = this.aspect * height;
    const left = -0.5 * width;

    this.projectionMatrix.makePerspective(left, left + width, top, top - height, this.near, this.far);

  }
}

export {PerspectiveCamera};