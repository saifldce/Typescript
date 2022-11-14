"use strict";
exports.__esModule = true;
// Function that take string as an argument and return string
function sayHello(name) {
    return "Hello ".concat(name);
    // return 123  Return type can't be a number
}
sayHello("Saif");
// sayHello(123); It will throw an error
// Function that take only number as an argument and alwasy return a number
function addNumber(x, y) {
    return x + y;
    // return "x+y"  Return type can't be a string
}
addNumber(5, 6);
// addNumber(5, "6"); It will throw an error
// Function that take argument of different type and return anything
function doSomething(name, age) {
    return "".concat(name, " is ").concat(age, " year old ");
}
doSomething("Sam", 6);
/*
void : It represents those return value types that we wish to ignore.
- `void` is basically used where there is no data.
- If a function does not return a value, it will return `undefined` by default.
Example : If a function does not return a value then you can specify `void` as return type.
*/
function sayHi() {
    console.log("Hi!");
}
var speech = sayHi();
console.log(speech); //Output: undefined
//  There is no meaning to assign void to a variable, as only `null` and `undefined` is assignable to void.
var nothing = undefined; // null
// let num: void = 1; // Error
/*
 never : It represents those return value types that can never be completed normally.
- `never` type is used when you are sure that something is never going to occur.
- It also does not return `undefined`
Example : If a function does not return to its endpoint or always throws an exception then you can specify `never` as return type.
*/
// Function throws an error
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
throwError("Something went wrong");
// Function always executing and never reaches endpoint because while loop never end.
function keepProcessing() {
    while (true) {
        console.log("I always does something and never ends.");
    }
}
