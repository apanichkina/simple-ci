"use struct";
//let hello = require('./public/js/main').hello;
//let ok = require('./public/js/main').ok;
let obj = require('./public/js/main');
let assert = require('assert');

assert.equal(obj.hello('Test'), 'Hello, Test');
assert.equal(obj.ok('Test'), 'OK, Test');