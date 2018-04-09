const path = require('path');
const rollup = require('rollup');
const rollupOptions = require('./rollup.config');

// see below for details on the options
const inputOptions = rollupOptions.input;
const outputOptions = rollupOptions.output;

var __DEV__ = process.env.NODE_ENVIRONMENT !== 'production';

inputOptions.perf = __DEV__;

async function build() {
  // create a bundle
  const bundle = await rollup.rollup(inputOptions);

  // generate code and a sourcemap
  const { code, map } = await bundle.generate(outputOptions);

  // or write the bundle to disk
  if (__DEV__) {
    console.log(bundle.getTimings());
  }
  await bundle.write(outputOptions);
}

build();