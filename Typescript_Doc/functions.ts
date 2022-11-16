/* Funstion :
- Functions are primary block of any program.
- With functions you can immplement/mimic the concept of object-oriented-programming like classes,objects,polymorphism and abstraction.
 */

/* Named functions:
- A named function is one where you declare and call a function by its given name
*/

function display() {
  console.log("Hello TypeScript!");
}

display(); //Output: Hello TypeScript

// Functions can also include parameter types and return type.
function Sum(x: number, y: number): number {
  return x + y;
}

Sum(2, 3); // returns 5

/* Anonymous functions:
- An anonymous function is one which is defined as an expression.This expression is stored in a variable.
- So the function does not have a name
*/

let greeting = function () {
  console.log("Hello TypeScript!");
};

greeting(); //Output: Hello TypeScript!

// An anonymous function can also include parameter types and return type.
let doSum = function (x: number, y: number): number {
  return x + y;
};

doSum(2, 3); // returns 5

/* Function Parameters:
- Parameters are values or arguments passed to a function.
*/

function Greet(greeting: string, name: string): string {
  return greeting + " " + name + "!";
}

Greet("Hello", "Steve"); //OK, returns "Hello Steve!"
/* Compiler Error: Expected 2 arguments, but got 1.
        Greet('Hi');
   Compiler Error: Expected 2 arguments, but got 3.
        Greet('Hi','Bill','Gates'); 
*/

/* Optional Parameters:
- The parameters that may or may not receive a value can be appended with a '?' to mark them as optional.
Note : All optional parameters must follow required parameters and should be at the end.
*/

function Greeting(greeting: string, name?: string): string {
  return greeting + " " + name + "!";
}

Greeting("Hello", "Steve"); //OK, returns "Hello Steve!"
Greeting("Hi"); // OK, returns "Hi undefined!".
/*Compiler Error: Expected 2 arguments, but got 3.
       Greeting('Hi','Bill','Gates'); 
*/

/* Default Parameters:
- TypeScript provides the option to add default values to parameters. 
- So, if the user does not provide a value to an argument, TypeScript will initialize the parameter with the default value.
*/

function Greetings(name: string, greeting: string = "Hello"): string {
  return greeting + " " + name + "!";
}

Greetings("Steve"); //OK, returns "Hello Steve!"
Greetings("Steve", "Hi"); // OK, returns "Hi Steve!".
Greetings("Bill"); //OK, returns "Hello Bill!"

//Note : When the default parameters precede required parameters in a function, they can be called by passing undefined.
function Greet1(greeting: string = "Hello", name: string): string {
  return greeting + " " + name + "!";
}

Greet1(undefined, "Steve"); //returns "Hello Steve!"
Greet1("Hi", "Steve"); //returns "Hi Steve!".
Greet1(undefined, "Bill"); //returns "Hello Bill!"

/* Arrow functions :
- Fat arrow notations are used for anonymous functions i.e for function expressions. 
- They are also called lambda functions in other languages.
*/

let sum = (x: number, y: number): number => {
  return x + y;
};

sum(10, 20); //returns 30

// If the function body consists of only one statement then no need for the curly brackets and the return keyword, as shown below.
let add = (x: number, y: number) => x + y;

add(3, 4); //returns 7

/* Function Overloading : 
- Unlike the `Javascript` `Typescript` support function overloading.
- You can have multiple functions with the same name but different parameter types and return type.
- The number of parameter should be the same.
- Can have multiple function declaration but must have one function implementation 
*/

function add1(a: string, b: string): string; // Function declaration

function add1(a: number, b: number): number; // Function declaration

function add1(a: any, b: any): any {
  // Function implementation
  return a + b;
}

add1("Hello ", "Steve"); // returns "Hello Steve"
add1(10, 20); // returns 30

// Function overloading with different number of parameters and types with same name is not supported.
/*
function display(a:string, b:string):void //Compiler Error: Duplicate function implementation
{
    console.log(a + b);
}

function display(a:number): void //Compiler Error: Duplicate function implementation
{
    console.log(a);
}
 */

/* Rest Parameters : 
- When the number of parameters that a function will receive is not known or can vary, we can use rest parameters. 
- In JavaScript, this is achieved with the "arguments" variable. 
- However, with TypeScript, we can use the rest parameter denoted by ellipsis ... .
- We can pass zero or more arguments to the rest parameter. 
- The compiler will create an array of arguments with the rest parameter name provided by us.
- Rest parameters must come last in the function definition, otherwise the TypeScript compiler will show an error.
*/

function restParam(greeting: string, ...names: string[]) {
  return greeting + " " + names.join(", ") + "!";
}

restParam("Hello", "Steve", "Bill"); // returns "Hello Steve, Bill!"

restParam("Hello");// returns "Hello !"
// Function that take string as an argument and return string
function sayHello(name: string): string {
  return `Hello ${name}`;

  // return 123  Return type can't be a number
}

sayHello("Saif");
// sayHello(123); It will throw an error

// Function that take only number as an argument and alwasy return a number
function addNumber(x: number, y: number): number {
  return x + y;

  // return "x+y"  Return type can't be a string
}

addNumber(5, 6);
// addNumber(5, "6"); It will throw an error

// Function that take argument of different type and return anything
function doSomething(name: string, age: number): any {
  return `${name} is ${age} year old `;
}

doSomething("Sam", 6);

/* 
void : It represents those return value types that we wish to ignore.
- `void` is basically used where there is no data.
- If a function does not return a value, it will return `undefined` by default.
Example : If a function does not return a value then you can specify `void` as return type.
*/

function sayHi(): void {
  console.log("Hi!");
}

let speech: void = sayHi();
console.log(speech); //Output: undefined

//  There is no meaning to assign void to a variable, as only `null` and `undefined` is assignable to void.

let nothing: void = undefined; // null
// let num: void = 1; // Error

/* 
 never : It represents those return value types that can never be completed normally.
- `never` type is used when you are sure that something is never going to occur.
- It also does not return `undefined`
Example : If a function does not return to its endpoint or always throws an exception then you can specify `never` as return type.
*/

// Function throws an error
function throwError(errorMsg: string): never {
  throw new Error(errorMsg);
}
throwError("Something went wrong");

// Function always executing and never reaches endpoint because while loop never end.
function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}
/*
Note : `void` type can have `null` or `undefined` as a value where as `never` type cannot have any value.

let something: void = null;
let nothing: never = null;  Error: Type 'null' is not assignable to type 'never'
*/

export {};
