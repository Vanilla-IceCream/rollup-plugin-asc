const assert = require('assert');

const fibNum = require('./fib-num.js');

const instance = fibNum({});

assert.equal(instance.exports.fib(8), 21);
console.log('fib(8) =', instance.exports.fib(8));
