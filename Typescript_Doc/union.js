"use strict";
/* Union :
- Union (|) operator allow us to use more than one data type for a variable or a function parameter.
- Syntax : (type1 | type2 | type3 | .. | typeN)
*/
exports.__esModule = true;
// Example :
var code;
code = 123; // OK
code = "ABC"; // OK
// code = false; // Compiler Error
var empId;
empId = 111; // OK
empId = "E111"; // OK
// empId = true; // Compiler Error
// Example: Function Parameter as Union Type
function displayType(code) {
    if (typeof code === "number")
        console.log("Code is number.");
    else if (typeof code === "string")
        console.log("Code is string.");
}
displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
