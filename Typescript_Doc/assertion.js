"use strict";
/* Assertion:
- It's an internal logic mechanism that typescript used to infer and check the type of a variable.
- Type assertion allows you to set the type of a value and tell the compiler not to infer it.
- It is similar to type casting in other languages like C# and Java.
- However, unlike C# and Java, there is no runtime effect of type assertion in TypeScript.
- It is merely a way to let the TypeScript compiler know the type of a variable.
*/
exports.__esModule = true;
// Example:
var code = 123;
var employeeCode = code;
console.log(typeof employeeCode); //Output: number
/*
 - Here, we have assigned code to employeeCode.
 - We have asserted that code is of type number in this case, and we are certain about it. Now, the type of employeeCode is number.
*/
// Example: Type Assertion with Object
var employee = {};
var employee1 = {};
employee1.name = "John"; // OK
employee1.code = 123; // OK
// Using as keyword
// While dealing with JSX in typescript only `as` syntax is allowed, b'coz JSX is embeddable in XML like a syntax.
var code1 = 123;
var employeeCode1 = code1;
