// Windows-safe build entry for the paperclipai CLI.
// The package's `npm run build` appends `chmod +x dist/index.js`, which fails on
// Windows. This script runs only the esbuild step (run from cli/).
import esbuild from "esbuild";
import config from "./esbuild.config.mjs";

await esbuild.build(config);
console.log("built cli/dist/index.js");
