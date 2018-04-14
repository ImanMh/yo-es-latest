module.exports = {
  name: '<%= packageName %>',
  jest: {
    verbose: true
  },
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ]
};
