const inputOptions = {
    input: './src/index.js',
};

const outputOptions = {
    format: 'umd',
    file: 'dist/main.js',
    sourcemap: true,
}

module.exports = {
  input: inputOptions,
  output: outputOptions,
};
