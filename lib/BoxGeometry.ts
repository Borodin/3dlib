import {BufferGeometry} from "./BufferGeometry";

class BoxGeometry extends BufferGeometry {
  constructor(width = 1, height = 1, depth = 1) {
    super();

    const halfWidth = width / 2;
    const halfHeight = height / 2;
    const halfDepth = depth / 2;

    const vertices = new Float32Array([
      // Front face
      -halfWidth, -halfHeight, halfDepth,
      halfWidth, -halfHeight, halfDepth,
      halfWidth, halfHeight, halfDepth,
      -halfWidth, halfHeight, halfDepth,

      // Back face
      -halfWidth, -halfHeight, -halfDepth,
      -halfWidth, halfHeight, -halfDepth,
      halfWidth, halfHeight, -halfDepth,
      halfWidth, -halfHeight, -halfDepth,

      // Top face
      -halfWidth, halfHeight, -halfDepth,
      -halfWidth, halfHeight, halfDepth,
      halfWidth, halfHeight, halfDepth,
      halfWidth, halfHeight, -halfDepth,

      // Bottom face
      -halfWidth, -halfHeight, -halfDepth,
      halfWidth, -halfHeight, -halfDepth,
      halfWidth, -halfHeight, halfDepth,
      -halfWidth, -halfHeight, halfDepth,

      // Right face
      halfWidth, -halfHeight, -halfDepth,
      halfWidth, halfHeight, -halfDepth,
      halfWidth, halfHeight, halfDepth,
      halfWidth, -halfHeight, halfDepth,

      // Left face
      -halfWidth, -halfHeight, -halfDepth,
      -halfWidth, -halfHeight, halfDepth,
      -halfWidth, halfHeight, halfDepth,
      -halfWidth, halfHeight, -halfDepth
    ]);

    const indices = new Uint16Array([
      0, 1, 2, 0, 2, 3,    // front
      4, 5, 6, 4, 6, 7,    // back
      8, 9, 10, 8, 10, 11,  // top
      12, 13, 14, 12, 14, 15,  // bottom
      16, 17, 18, 16, 18, 19,  // right
      20, 21, 22, 20, 22, 23   // left
    ]);

    this.setIndex(indices);
    this.setVertices(vertices);
  }

}

export {BoxGeometry};