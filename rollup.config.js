import { terser } from 'rollup-plugin-terser';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'dist/index.js',
  output: {
    file: 'dist/keyframegen.min.js',
    format: 'cjs',
    sourcemap: true,
    plugins: [terser()]
  },
  plugins: [nodeResolve()]
};