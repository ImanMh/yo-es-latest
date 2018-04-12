const path = require('path');
const EventEmitter = require('events');
const rollup = require('rollup');
const args = require('easy-argument-parser');
const async = require('asyncawait/async');
const await = require('asyncawait/await');
const rollupOptions = require('./rollup.config');

// see below for details on the options
const inputOptions = rollupOptions.input;
const outputOptions = rollupOptions.output;
const watchOptions = rollupOptions.watch

var __DEV__ = process.env.NODE_ENVIRONMENT !== 'production';

inputOptions.perf = __DEV__;

const build = async (
  function build() {
    if (args.watch) {
      const watcher = rollup.watch(Object.assign(
        inputOptions,
        {
          output: outputOptions,
          watch: {
            include: ['src/**', 'node_modules/**'],
          },
        }
      ));
      watcher.on('event', event => {
        const nowDateTime = new Date();
        const now = [nowDateTime.getHours(), nowDateTime.getMinutes(), nowDateTime.getSeconds()].join(':');
        if (event.code === 'BUNDLE_END') {
          console.log(now + ' updated in ' + event.duration + 'ms');
        }
      });
      // keep watcher alive
      const emiter = new EventEmitter();
      emiter.on(Math.random().toString(), () => {});
    } else {
      // create a bundle
      const bundle = await (rollup.rollup(inputOptions));
      // generate code and a sourcemap
      const { code, map } = await (bundle.generate(outputOptions));
      await (bundle.write(outputOptions));
      // or write the bundle to disk
      if (__DEV__) {
        console.log(bundle.getTimings());
      }
    }
  }
);

build();