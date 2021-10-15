const fs = require("fs");

const OUTDIR = "dist/worker";

require("esbuild")
  .build({
    entryPoints: ["worker/index.js"],
    bundle: true,
    minify: false,
    target: "es2020",
    outfile: `${OUTDIR}/index.js`,
  })
  .then(() => {
    fs.writeFileSync(
      `${OUTDIR}/package.json`,
      JSON.stringify({
        private: true,
        version: "1.0.0",
        description: "Partial Date Inputs POC",
        main: "index.js",
        license: "MIT",
      })
    );
  })
  .catch(() => process.exit(1));
