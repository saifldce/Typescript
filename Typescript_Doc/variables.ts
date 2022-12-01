// Different types in typescript

// Example: string
let sayHello: string = "Hello Saif";

console.log(sayHello);

//sayHello = 123  we cann't assign number to a string typed variable

// We can also apply methods on `sayHello`
sayHello.toLowerCase();
sayHello.split("");

// Example: number
let userID: number = 552;

// we can also assign floating to this
userID = 552.12345;

userID.toFixed(2);
console.log(userID);

// Example: boolean
let isloggedIn: boolean = false;

//isloggedIn = "No"

/* any:
- Sometimes we do not always have prior knowledge about the type of some variables especially when there are
  user entered values from third parties libraries.
- In such cases we need provision that can deal with dynamic content.
- The `any` type comes in handy here. 
- The type any can be used only when you are not sure about the outcome.
- When we use `any` as type it just restrict the `type checking` nothing else.
*/

// Example: any type Object
let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.

obj.foo();
obj();
obj.bar = 100;
obj = "hello";

// Example: any type Array
let arr: any[] = ["John", 212, true];
arr.push("Smith");
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ]

/* null & undefined:
Undefined -: A variable is undefined when it's not assigned any value after being decalred.
Null -: Null refers to a value that is either `empty` or does not exist. null means no value.
- To make a variable null we must assign null value to it as by default in typescript unassigned value are termed `undefined`.
*/

// Example: null & undefiend

let s: string;

// Returns undefined
// console.log(s); //Output: undefined

let n: any;

// Assigned null value
n = null;
console.log(n); // Output: null

/* 
- In this example `==` equals operator helps us whether the variable is `null` or `undefined`.
- When we check if `null` == `undefined` it results `true`. 
*/
let str: string;
let num: any;

// Assigned null value
n = null;
console.log(num == null); // Returns true
// console.log(str == undefined); // Returns true
console.log(null == undefined); // Returns true

/*
- In this example, just as in the previous example instead of `==` we use `===` equals operator to check.
- this method is called strict equality check.
*/


let str1: string;
let num1: any;
  
// Assigned null value
n = null;
console.log(num1 === null); // Returns true
// console.log(str1 === undefined); // Returns true
console.log(null === undefined); // Returns false

export {};
