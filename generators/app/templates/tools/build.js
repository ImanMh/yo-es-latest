const path = require('path');
const rollup = require('rollup');
const rollupOptions = require('./rollup.config');

// see below for details on the options
const inputOptions = rollupOptions.input;
const outputOptions = rollupOptions.output;

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  console.log(bundle.imports); // an array of external dependencies
  console.log(bundle.exports); // an array of names exported by the entry point
  console.log(bundle.modules); // an array of module objects

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  await bundle.write(outputOptions);
}

build();