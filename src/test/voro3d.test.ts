import { describe, expect, it } from "vitest";

import { Voro3D } from "../../dist/index.js";

describe("Voro3D", () => {
  it("computes one cell per point", async () => {
    const points: number[][] = [
      [0, -4.99995, 0],
      [-3.6899379709983346, -2.5739679448534636, -4.99995],
      [3.576031624417964, -2.546234552807669, -4.99995],
      [4.99995, -2.172426002791485, 1.5834713245347982],
      [0.037275242244040996, -2.071104653605047, 4.99995],
      [-4.99995, -2.182976164456667, 1.665892796700179],
      [-0.03727524224404482, 2.071104653605047, -4.99995],
      [4.99995, 2.1829761644566674, -1.6658927967001833],
      [3.689937970998336, 2.5739679448534636, 4.99995],
      [-3.5760316244179706, 2.546234552807671, 4.99995],
      [-4.99995, 2.1724260027914855, -1.5834713245348024],
      [1.974399169327309, 4.99995, 0.6252871464344901],
    ];

    const container = await Voro3D.create(-5, 5, -5, 5, -5, 5, 2, 2, 2);
    const cells = container.computeCells(points, true);

    expect(cells).toHaveLength(points.length);

    // Check the returned geometry structure:
    // - all ids and coordinates are fine
    // - number of vertices per cell are fine
    // - number of faces and neighbors match
    // - each face has at least 3 vertices
    for (const cell of cells) {
      expect(Number.isFinite(cell.particleID)).toBe(true);
      expect(Number.isFinite(cell.x)).toBe(true);
      expect(Number.isFinite(cell.y)).toBe(true);
      expect(Number.isFinite(cell.z)).toBe(true);

      expect(cell.vertices.length % 3).toBe(0);
      expect(cell.nFaces).toBe(cell.faces.length);
      expect(cell.neighbors.length).toBe(cell.faces.length);

      for (const face of cell.faces) {
        expect(face.length).toBeGreaterThan(2);
      }
    }

    // Wrapper guarantees sorting by particleID
    const ids = cells.map((c) => c.particleID);
    const sortedIds = [...ids].sort((a, b) => a - b);
    expect(ids).toEqual(sortedIds);
  });

  it("returns empty array for empty input", async () => {
    const container = await Voro3D.create(-5, 5, -5, 5, -5, 5, 2, 2, 2);
    expect(container.computeCells([], true)).toEqual([]);
  });
});
