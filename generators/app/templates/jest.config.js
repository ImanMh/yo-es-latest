module.exports = {
  name: '<%= packageName %>',
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/node_modules/**',
    '!**/vendor/**'
  ],
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)(spec|test).js?(x)',
    '**test?(s)/**/*.js',
  ],
};
