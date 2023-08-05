declare interface Vector<T> {
  get(index: number): T;
  set(index: number, value: T): boolean;
  size(): number;
  push_back(i: number): void;
  delete(): void;
}

declare global {
  export class VectorFloat implements Vector<number> {
    get(index: number): number;
    set(index: number, value: number): boolean;
    size(): number;
    push_back(i: number): void;
    delete(): void;
  }

  export class VectorInt implements Vector<number> {
    get(index: number): number;
    set(index: number, value: number): boolean;
    size(): number;
    push_back(i: number): void;
    delete(): void;
  }

  export class VectorVectorInt implements Vector<VectorInt> {
    get(index: number): VectorInt;
    set(index: number, value: VectorInt): boolean;
    size(): number;
    push_back(i: number): void;
    delete(): void;
  }

  export class VectorCellExport implements Vector<CellExport> {
    get(index: number): CellExport;
    set(index: number, value: CellExport): boolean;
    size(): number;
    push_back(i: number): void;
    delete(): void;
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
    computeCells(points: VectorFloat, convertToWorld?: boolean): VectorCellExport;
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

  export interface VoroRaw {
    VectorFloat: { new (): VectorFloat };
    VectorInt: { new (): VectorInt };
    VectorVectorInt: { new (): VectorVectorInt };
    VectorCellExport: { new (): VectorCellExport };
    CellExport: { new (): CellExport };
    Container: {
      new (
        xMin: number,
        xMax: number,
        yMin: number,
        yMax: number,
        zMin: number,
        zMax: number,
        nX: number,
        nY: number,
        nZ: number
      ): Container;
    };
  }
}

declare const createVoro: () => Promise<VoroRaw>;

export default createVoro;
