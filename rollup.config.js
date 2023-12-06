import pkg from './package.json';
export default [
  // CommonJS
  {
    input: './lib/index.js',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        preserveModules: true
      }
    ],
    external: Object.keys(pkg.dependencies)
  }
];
