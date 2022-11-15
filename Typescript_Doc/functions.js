"use strict";
/* Funstion :
- Functions are primary block of any program.
- With functions you can immplement/mimic the concept of object-oriented-programming like classes,objects,polymorphism and abstraction.
 */
exports.__esModule = true;
/* Named functions:
- A named function is one where you declare and call a function by its given name
*/
function display() {
    console.log("Hello TypeScript!");
}
display(); //Output: Hello TypeScript
// Functions can also include parameter types and return type.
function Sum(x, y) {
    return x + y;
}
Sum(2, 3); // returns 5
/* Anonymous functions:
- An anonymous function is one which is defined as an expression.This expression is stored in a variable.
- So the function does not have a name
*/
var greeting = function () {
    console.log("Hello TypeScript!");
};
greeting(); //Output: Hello TypeScript!
// An anonymous function can also include parameter types and return type.
var doSum = function (x, y) {
    return x + y;
};
doSum(2, 3); // returns 5
/* Function Parameters
- Parameters are values or arguments passed to a function.
*/
function Greet(greeting, name) {
    return greeting + " " + name + "!";
}
Greet("Hello", "Steve"); //OK, returns "Hello Steve!"
/* Compiler Error: Expected 2 arguments, but got 1.
        Greet('Hi');
   Compiler Error: Expected 2 arguments, but got 3.
        Greet('Hi','Bill','Gates');
*/
/* Optional Parameters
- The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.
Note : All optional parameters must follow required parameters and should be at the end.
*/
function Greeting(greeting, name) {
    return greeting + " " + name + "!";
}
Greeting("Hello", "Steve"); //OK, returns "Hello Steve!"
Greeting("Hi"); // OK, returns "Hi undefined!".
/*Compiler Error: Expected 2 arguments, but got 3.
       Greeting('Hi','Bill','Gates');
*/
/* Default Parameters
- TypeScript provides the option to add default values to parameters.
- So, if the user does not provide a value to an argument, TypeScript will initialize the parameter with the default value.
*/
function Greetings(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + " " + name + "!";
}
Greetings("Steve"); //OK, returns "Hello Steve!"
Greetings("Steve", "Hi"); // OK, returns "Hi Steve!".
Greetings("Bill"); //OK, returns "Hello Bill!"
//Note : When the default parameters precede required parameters in a function, they can be called by passing undefined.
function Greet1(greeting, name) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + " " + name + "!";
}
Greet1(undefined, "Steve"); //returns "Hello Steve!"
Greet1("Hi", "Steve"); //returns "Hi Steve!".
Greet1(undefined, "Bill"); //returns "Hello Bill!"
/* Arrow functions
- Fat arrow notations are used for anonymous functions i.e for function expressions.
- They are also called lambda functions in other languages.
*/
var sum = function (x, y) {
    return x + y;
};
sum(10, 20); //returns 30
// If the function body consists of only one statement then no need for the curly brackets and the return keyword, as shown below.
var add = function (x, y) { return x + y; };
add(3, 4); //returns 7
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
