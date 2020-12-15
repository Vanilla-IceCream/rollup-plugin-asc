# rollup-plugin-asc [![Build Status](https://travis-ci.org/Vanilla-IceCream/rollup-plugin-asc.svg?branch=master)](https://travis-ci.org/Vanilla-IceCream/rollup-plugin-asc) [![Coverage Status](https://coveralls.io/repos/github/Vanilla-IceCream/rollup-plugin-asc/badge.svg?branch=master)](https://coveralls.io/github/Vanilla-IceCream/rollup-plugin-asc?branch=master)

Compile AssemblyScript with Rollup.

## Requirements

This plugin requires an [LTS](https://github.com/nodejs/Release) Node version (v8.0.0+) and Rollup v1.20.0+.

## Install

Using npm:

```sh
$ npm i rollup-plugin-asc -D
```

Using yarn:

```sh
$ yarn add rollup-plugin-asc -D
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

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
    asc({ output: path.join(__dirname, 'dist') }),
  ],
};
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

## Options

### `output`

Type: `string`<br>
Default: `''`<br>
Example: `output: path.join(__dirname, 'dist'),`

### `args`

Type: `string[]`<br>
Default: `[]`<br>
Example: `args: ['--measure'],`

The arguments that is passed straight to the [AssemblyScript compiler library](https://www.assemblyscript.org/compiler.html#command-line-options).

### `textFile`

Type: `boolean`<br>
Default: `false`<br>
Example: `textFile: true,`

### `tsdFile`

Type: `boolean`<br>
Default: `false`<br>
Example: `tsdFile: true,`

## Example

See the `example` [folder](./example).
