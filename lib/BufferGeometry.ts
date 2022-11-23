abstract class BufferGeometry{
  vertices: Float32Array;
  index: Uint16Array;

  protected constructor(){

  }

  setIndex(index: Uint16Array){
    this.index = index;
  }

  setVertices(vertices: Float32Array){
    this.vertices = vertices;
  }
}

export {BufferGeometry};