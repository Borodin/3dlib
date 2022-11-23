import {Renderer} from "./lib/Renderer";
import {Scene} from "./lib/Scene";
import {BoxGeometry} from "./lib/BoxGeometry";
import {Mesh} from "./lib/Mesh";
import {Vector3} from "./lib/Vector3";
import {PerspectiveCamera} from "./lib/PerspectiveCamera";


const scene = new Scene();
const greenBox = new Mesh(
    new BoxGeometry(0.1, 0.5, 0.5)
);
greenBox.warframeColor = 'green';
scene.add(greenBox);

const redBox = new Mesh(
  new BoxGeometry(0.2, 0.2, 0.2)
);
redBox.warframeColor = 'red';
scene.add(redBox);

const perspectiveCamera = new PerspectiveCamera(90, 1, 0.1, 100);
perspectiveCamera.matrix.setPosition(new Vector3(0, 0.3, -2));
const renderer = new Renderer();
document.body.appendChild(renderer.domElement);

let delta = 0
const vector = new Vector3(0, 1, 1);

const animate = () => {
    requestAnimationFrame(animate);
    greenBox.matrix.makeRotationAxis(vector.set(0, 1, 1).normalize(), delta);
    redBox.matrix.makeRotationAxis(vector.set(0, 1, 1).normalize(), -delta);
    redBox.matrix.setPosition(vector.set(0.5, 0, 0).multiplyScalar(Math.sin(delta)));
    delta += 0.05;
    renderer.render(scene, perspectiveCamera);
}
animate();