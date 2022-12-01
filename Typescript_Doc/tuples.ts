/* Tuples :
- Tuples is nothing but an array of fixed length and predifined types for each index.
- In tuple each element in the array to be a known type of value.
*/

// Example : Tuple vs Other Data Types
var empId: number = 1;
var empName: string = "Steve";

// Tuple type variable
let employee: [number, string] = [1, "Steve"];

// Tuple type variable can multiple data types
var person: [number, string, boolean] = [1, "Steve", true];

var user: [number, string, boolean, number, string]; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable

// We can declare array of tuple also
var emp: [number, string][];
emp = [
  [1, "Steve"],
  [2, "Bill"],
  [3, "Jeff"],
];

// We can use array methods
var employees: [number, string] = [1, "Steve"];

// retrieving value by index and performing an operation
employees[1] = employees[1].concat(" Jobs");
console.log(employees); //Output: [1, 'Steve Jobs']

export {};
