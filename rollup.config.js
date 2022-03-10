import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import cleanup from "rollup-plugin-cleanup";

export default {
  input: "./src/index.js",
  output: {
    name: "leaf-util",
    file: "./dist/index.js",
    format: "umd",
  },
  plugins: [resolve(), commonjs(), terser(), cleanup()],
};
