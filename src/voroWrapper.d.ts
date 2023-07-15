export namespace VoroRaw {
  class Vector<T> {
    get: (index: number) => T;
    size: () => number;
    push_back: (i: number) => void;
  }

  export class VectorFloat implements Vector<number> {
    get: (index: number) => number;
    size: () => number;
    push_back: (i: number) => void;
  }

  export class VectorInt implements Vector<number> {
    get: (index: number) => number;
    size: () => number;
    push_back: (i: number) => void;
  }

  export class VectorVectorInt implements Vector<VectorInt> {
    get: (index: number) => VectorInt;
    size: () => number;
    push_back: (i: number) => void;
  }

  export class VectorCellExport implements Vector<CellExport> {
    get: (index: number) => CellExport;
    size: () => number;
    push_back: (i: number) => void;
  }

  export class CellExport {
    particleID: number;
    x: number;
    y: number;
    z: number;
    nFaces: number;
    vertices: VectorFloat;
    faces: VectorVectorInt;
  }

  export class Container {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    zMin: number;
    zMax: number;
    nX: number;
    nY: number;
    nZ: number;
    computeCells: (points: VectorFloat) => VectorCellExport;
    constructor();
    constructor(
      xMin?: number,
      xMax?: number,
      yMin?: number,
      yMax?: number,
      zMin?: number,
      zMax?: number,
      nX?: number,
      nY?: number,
      nZ?: number
    );
  }
}
