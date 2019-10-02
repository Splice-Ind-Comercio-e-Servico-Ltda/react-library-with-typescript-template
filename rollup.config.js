import typescript from "rollup-plugin-typescript2";
import clear from "rollup-plugin-clear";
import progress from "rollup-plugin-progress";

import pkg from "./package.json";

export default {
  input: "src/lib/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    progress({
      clearLine: false
    }),
    clear({
      targets: ["build"],
      watch: true
    }),
    typescript({ lib: ["es5", "es6", "dom"], target: "es5" })
  ]
};
