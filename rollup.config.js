import typescript from "@rollup/plugin-typescript";
import copy from "rollup-plugin-copy";

export default [
  {
    input: `src/voro3d.ts`,
    plugins: [
      typescript(),
      copy({
        targets: [{ src: "src/voro_raw.wasm", dest: "build" }],
      }),
    ],
    external: ["module"],
    output: [
      {
        dir: "build",
        format: "es",
        sourcemap: true,
        exports: "auto",
      },
    ],
  },
];
