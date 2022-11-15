/* Assertion: 
- It's an internal logic mechanism that typescript used to infer and check the type of a variable.
- Type assertion allows you to set the type of a value and tell the compiler not to infer it.
- It is similar to type casting in other languages like C# and Java.
- However, unlike C# and Java, there is no runtime effect of type assertion in TypeScript. 
- It is merely a way to let the TypeScript compiler know the type of a variable.
*/

// Example:
let code: any = 123;
let employeeCode = <number>code;
console.log(typeof employeeCode); //Output: number

/*
 - Here, we have assigned code to employeeCode.
 - We have asserted that code is of type number in this case, and we are certain about it. Now, the type of employeeCode is number.
*/

// Example: Type Assertion with Object

let employee = {};
/*
Compiler Error: Property 'name' does not exist on type '{}'
     employee.name = "John";
Compiler Error: Property 'code' does not exist on type '{}'     
     employee.code = 123;
*/

// The above example will give a compiler error, because the compiler assumes that the type of employee is {} with no properties.
// We can avoid this situation by using type assertion, as shown below.

interface Employee {
  name: string;
  code: number;
}

let employee1 = <Employee>{};
employee1.name = "John"; // OK
employee1.code = 123; // OK

// Using as keyword
// While dealing with JSX in typescript only `as` syntax is allowed, b'coz JSX is embeddable in XML like a syntax.
let code1: any = 123; 
let employeeCode1 = code1 as number;