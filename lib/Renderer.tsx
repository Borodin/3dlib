import {Scene} from "./Scene";
import {Camera} from "./Camera";
import {OrthographicCamera} from "./OrthographicCamera";
import {Mesh} from "./Mesh";
import {Vector3} from "./Vector3";

interface RendererParams {
  domElement?: HTMLCanvasElement;
  width?: number;
  height?: number;
  backgroundColor?: string;
}

class Renderer {
  width: number;
  height: number;
  domElement: HTMLCanvasElement;
  backgroundColor: string;

  private readonly context: CanvasRenderingContext2D;
  private _vector3: Vector3;


  constructor(params: RendererParams = {}) {
    this.domElement = params.domElement || document.createElement('canvas');
    this.context = this.domElement.getContext('2d');
    this.setSize(params.width || 800, params.height || 600);
    this.backgroundColor = params.backgroundColor || 'black';
    this._vector3 = new Vector3();

    return this;
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.domElement.width = this.width;
    this.domElement.height = this.height;
  }

  render(scene: Scene, camera: Camera | OrthographicCamera) {
    this.domElement.width = this.domElement.width;
    this.context.fillStyle = this.backgroundColor;
    this.context.fillRect(0, 0, this.width, this.height);


    scene.children.forEach((child) => {
      if (!child.visible) return;
      if (child instanceof Mesh) {
        for (let i = 0; i < child.geometry.index.length; i += 3) {
          this.context.strokeStyle = child.warframeColor;
          this.context.beginPath();
          for (let j = 0; j < 3; j++) {
            const position = child.geometry.vertices.slice(child.geometry.index[i + j] * 3, child.geometry.index[i + j] * 3 + 3);
            const vector = this._vector3
              .fromArray(position)
              .applyMatrix4(child.matrix)
              .applyMatrix4(camera.matrix)
              .applyMatrix4(camera.projectionMatrix);

            const halfWidth = this.width / 2;
            const halfHeight = this.height / 2;
            const aspect = this.width / this.height;
            this.context[j == 0 ? 'moveTo' : 'lineTo'](
              vector.x * halfWidth + halfWidth,
              vector.y * halfHeight * aspect + halfHeight
            );
          }
          this.context.stroke()
        }
      }
    })
  }
}

export {
  Renderer,
  RendererParams
}