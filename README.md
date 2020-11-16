# rollup-plugin-asc

Compile AssemblyScript with Rollup.

## Install

```sh
$ npm i rollup-plugin-asc -D
# or
$ yarn add rollup-plugin-asc -D
```

## Usage

```js
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import asc from 'rollup-plugin-asc';

const file = '<FILE_NAME>.ts';

export default {
  input: path.join(__dirname, 'src', file),
  output: {
    file: path.join(__dirname, 'dist', file.substring(file.lastIndexOf('.'), 0) + '.js'),
    format: 'cjs',
    exports: 'auto',
  },
  external: ['fs', 'path', '@assemblyscript/loader', '@assemblyscript/loader/umd'],
  plugins: [
    resolve(),
    commonjs(),
    asc({
      output: path.join(__dirname, 'dist'),
      args: ['--measure'],
    }),
  ],
};
```

[Example](./example)
