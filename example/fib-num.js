'use strict';

var fs = require('fs');
var path = require('path');
var loader = require('@assemblyscript/loader/umd');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var loader__default = /*#__PURE__*/_interopDefaultLegacy(loader);

var fibNum = (imports) => {
            return loader__default['default'].instantiateSync(
              fs__default['default'].readFileSync(path__default['default'].join(__dirname, 'fib-num.wasm')),
              { ...imports },
            );
          };

module.exports = fibNum;
