// TypeScript bindings for emscripten-generated code.  Automatically generated at compile time.
interface WasmModule {
}

export interface ClassHandle {
  isAliasOf(other: ClassHandle): boolean;
  delete(): void;
  deleteLater(): this;
  isDeleted(): boolean;
  // @ts-ignore - If targeting lower than ESNext, this symbol might not exist.
  [Symbol.dispose](): void;
  clone(): this;
}
export interface VectorFloat extends ClassHandle {
  push_back(_0: number): void;
  resize(_0: number, _1: number): void;
  size(): number;
  get(_0: number): number | undefined;
  set(_0: number, _1: number): boolean;
}

export interface VectorInt extends ClassHandle {
  push_back(_0: number): void;
  resize(_0: number, _1: number): void;
  size(): number;
  get(_0: number): number | undefined;
  set(_0: number, _1: number): boolean;
}

export interface VectorVectorInt extends ClassHandle {
  push_back(_0: VectorInt): void;
  resize(_0: number, _1: VectorInt): void;
  size(): number;
  get(_0: number): VectorInt | undefined;
  set(_0: number, _1: VectorInt): boolean;
}

export interface VectorCellExport extends ClassHandle {
  size(): number;
  get(_0: number): CellExport | undefined;
  push_back(_0: CellExport): void;
  resize(_0: number, _1: CellExport): void;
  set(_0: number, _1: CellExport): boolean;
}

export interface CellExport extends ClassHandle {
  particleID: number;
  x: number;
  y: number;
  z: number;
  nFaces: number;
  vertices: VectorFloat;
  faces: VectorVectorInt;
  neighbors: VectorInt;
}

export interface Container extends ClassHandle {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  zMin: number;
  zMax: number;
  nX: number;
  nY: number;
  nZ: number;
  computeCells(_0: VectorFloat, _1: boolean): VectorCellExport;
}

interface EmbindModule {
  VectorFloat: {
    new(): VectorFloat;
  };
  VectorInt: {
    new(): VectorInt;
  };
  VectorVectorInt: {
    new(): VectorVectorInt;
  };
  VectorCellExport: {
    new(): VectorCellExport;
  };
  CellExport: {
    new(): CellExport;
  };
  Container: {
    new(): Container;
    new(_0: number, _1: number, _2: number, _3: number, _4: number, _5: number, _6: number, _7: number, _8: number): Container;
  };
}

export type MainModule = WasmModule & EmbindModule;
export default function MainModuleFactory (options?: unknown): Promise<MainModule>;
