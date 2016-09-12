"use strict";
function hello(name){
    return "Hello, " + name;
}
function ok(name){
    return "OK, " + name;
}
if (typeof exports === 'object') {
    exports.hello = hello;
    exports.ok = ok;
}