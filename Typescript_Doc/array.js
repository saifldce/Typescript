"use strict";
/* Array :
- An array is a special type of data type which can store multiple values of different data types sequentially using a special syntax.
- Array can be declared in two ways :
1. Using square brackets.
2. Using a generic array type.
*/
exports.__esModule = true;
// Declaring array using square bracket
var hero = ["Thor", "Spider-man", "Iron-man"];
// Declaring array using generic array type
var heros = ["Thor", "Spider-man", "Iron-man"];
// Array can be declared and initialized separately
var fruits;
fruits = ["Apple", "Orange", "Banana"];
var ids;
ids = [23, 34, 100, 124, 44];
// An array in TypeScript can contain elements of different data types using a generic array type syntax, as shown below.
var value = ["Apple", 2, "Orange", 3, 4, "Banana"];
// or
var values = ["Apple", 2, "Orange", 3, 4, "Banana"];
/** Array methods :
Method	         - Description
----------------------------------------------------------------------------------------------
pop()	         - Removes the last element of the array and return that element
push()	         - Adds new elements to the array and returns the new array length
sort()	         - Sorts all the elements of the array
concat()         - Joins two arrays and returns the combined result
indexOf()	     - Returns the index of the first match of a value in the array (-1 if not found)
copyWithin()     - Copies a sequence of elements within the array
fill()	         - Fills the array with a static value from the provided start index to the end index
shift()	         - Removes and returns the first element of the array
splice()	     - Adds or removes elements from the array
unshift()	     - Adds one or more elements to the beginning of the array
includes()	     - Checks whether the array contains a certain element
join()	         - Joins all elements of the array into a string
lastIndexOf()    - Returns the last index of an element in the array
slice()	         - Extracts a section of the array and returns the new array
toString()	     -  Returns a string representation of the array
toLocaleString() - Returns a localized string representing the array
 */
// Example: Some of the array methods
var fruit = ["Apple", "Orange", "Banana"];
fruit.sort();
console.log(fruit); //output: [ 'Apple', 'Banana', 'Orange' ]
console.log(fruit.pop()); //output: Orange
fruit.push("Papaya");
console.log(fruit); //output: ['Apple', 'Banana', 'Papaya']
fruit = fruit.concat(["Fig", "Mango"]);
console.log(fruit); //output: ['Apple', 'Banana', 'Papaya', 'Fig', 'Mango']
console.log(fruit.indexOf("Papaya")); //output: 2
