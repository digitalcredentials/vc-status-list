import pkg from './package.json';
export default [
  // CommonJS
  {
    input: './lib/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'auto'
      }
    ],
    external: Object.keys(pkg.dependencies)
  },
  // ESM
  {
    input: './lib/index.js',
    output: [
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        exports: 'auto'
      }
    ],
    external: Object.keys(pkg.dependencies)
  }
];
