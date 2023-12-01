module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'digitalbazaar',
    'digitalbazaar/jsdoc',
    'digitalbazaar/module'
  ],
  ignorePatterns: ['dist', 'post-test.js', 'pre-test.js'],
  rules: {
    'unicorn/prefer-node-protocol': 'error'
  }
};
