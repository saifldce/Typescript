"use strict";
// string
exports.__esModule = true;
var sayHello = "Hello Saif";
console.log(sayHello);
//sayHello = 123  we cann't assign number to a string typed variable
// We can also apply methods on `sayHello`
sayHello.toLowerCase();
sayHello.split("");
// number
var userID = 552;
// we can also assign floating to this
userID = 552.12345;
userID.toFixed(2);
console.log(userID);
// boolean
var isloggedIn = false;
//isloggedIn = "yes"
// any
// The type any can be used only when you are not sure about the outcome.
// When we use `any` as type it just restrict the `type checking` nothing else.
var obj = { x: 0 };
// None of the following lines of code will throw compiler errors.
obj.foo();
obj();
obj.bar = 100;
obj = "hello";
