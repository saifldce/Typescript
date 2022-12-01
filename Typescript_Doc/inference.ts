/* Typescript infers types of variables when there is no explicit information available in the form type annotations.
-Types are inferred by typescript compiler when:
 - Variables are initialise
 - Default value are set for parameters
 - Function return types are determined
*/
// Example:
let str = "some text";
let num = 123;
/* Compiler Error: Type 'number' is not assignable to type 'string'
   str = num;
*/
// Example: Type inference in complex object

let arr = [10, null, 30, 40];
/*
- In the above example, we have an array that has the values 10, null, 30, and, 40 . 
- TypeScript looks for the most common type to infer the type of the object. 
- In this case, it picks the one thats is compatible with all types i.e. number, as well as null.
*/

let arr1 = [0, 1, "test"];
/*
- In the above example, here the type would be (string | number).
- Which means that the array can hold either `string` or `number` values. This is called union type
*/

arr1.push("str"); // OK
/* Compiler Error: Argument of type 'true' is not assignable to parameter of type 'string | number'
   arr1.push(true);
*/

// The return type of a function is also inferred by the returning value
function sum(a: number, b: number) {
  return a + b;
}

var total: number = sum(10, 20); // OK
//Compiler Error : var str: string = sum(10,20);


