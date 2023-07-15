# Voro3D

## What does Voro3D do?
Calculate voronoi cells within a 3D box.

Voro3D is a thin wrapper around the WebAssembly output of the [Voro++ Emscripten](https://github.com/LukPopp0/Voro-Emscripten) project. It behaves like a regular module and hides loading the main `wasm` file which makes it easier to use. Also, the C++ vector types are converted into regular JavaScript arrays. TypeScript definitions are added as well.

## Usage
The module exports just one type and one class. Import the module and create a container instance:
```javascript
import { Voro3D } from 'voro3d';
const container = new Voro3D.Container(-10, 10, -10, 10, -10, 10, 2, 2, 2);
```
The container constructor accepts 9 optionals arguments. The first six arguments define the dimensions of the box (xMin, xMax, yMin, yMax, zMin, zMax). The last three arguments are used for the calculation of the voronoi cells where the box is divided into n sub computation boxes in x, y and z direction.

Now, calculate the voronoi cells. The function accepts either an array of vertices or a flattened array:
```javascript
const points = [ /* ... */ ];
const cells = container.computeCells(points);
```

Find a full example in the `src/test/` folder.


## License

The license is based on the license of [Voro++](https://math.lbl.gov/voro++/) and can be found [here](./LICENSE).
