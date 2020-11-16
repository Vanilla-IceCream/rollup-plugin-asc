import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const asc = require('../');

const file = 'fib-num.ts';

export default {
  input: path.join(__dirname, file),
  output: {
    file: path.join(__dirname, file.substring(file.lastIndexOf('.'), 0) + '.js'),
    format: 'cjs',
    exports: 'auto',
  },
  external: ['fs', 'path', '@assemblyscript/loader', '@assemblyscript/loader/umd'],
  plugins: [
    resolve(),
    commonjs(),
    asc({
      output: path.join(__dirname),
      args: ['--measure'],
    }),
  ],
};
