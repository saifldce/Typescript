"use strict";
/* Tuples :
- Tuples is nothing but an array of fixed length and predifined types for each index.
- In tuple each element in the array to be a known type of value.
*/
exports.__esModule = true;
// Example : Tuple vs Other Data Types
var empId = 1;
var empName = "Steve";
// Tuple type variable
var employee = [1, "Steve"];
// Tuple type variable can multiple data types
var person = [1, "Steve", true];
var user; // declare tuple variable
user = [1, "Steve", true, 20, "Admin"]; // initialize tuple variable
// We can declare array of tuple also
var emp;
emp = [
    [1, "Steve"],
    [2, "Bill"],
    [3, "Jeff"],
];
// We can use array methods
var employees = [1, "Steve"];
// retrieving value by index and performing an operation
employees[1] = employees[1].concat(" Jobs");
console.log(employees); //Output: [1, 'Steve Jobs']
