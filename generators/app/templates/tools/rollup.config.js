var babel = require('rollup-plugin-babel');

const inputOptions = {
  input: './src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};

const outputOptions = {
  name: '<%= packageName %>',
  format: 'umd',
  file: 'dist/<%= packageName %>.js',
  sourcemap: true,
}

const watchOptions = {
  include: '../src/**',
};

module.exports = {
  input: inputOptions,
  output: outputOptions,
  watch: watchOptions,
};
