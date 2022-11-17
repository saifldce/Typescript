"use strict";
/* Interface :
- Interface in typescript is types for the `Objecct`.
- In typescript interface id defined with the help of the `interface` keyword.
- Javascript uses an interface for the type checking.
- The interface is also known as `duck typing` or `structural subtyping`.
- An interface can include properties and method declarations using function or an arrow function.
*/
exports.__esModule = true;
var rectangle = {
    height: 20,
    width: 10
};
var coloredRectangle = {
    height: 20,
    width: 10,
    color: "red"
};
function addKeyValue(key, value) {
    console.log("addKeyValue: key = " + key + ", value = " + value);
}
function updateKeyValue(key, value) {
    console.log("updateKeyValue: key = " + key + ", value = " + value);
}
var kvp = addKeyValue;
kvp(1, "Bill"); //Output: addKeyValue: key = 1, value = Bill
kvp = updateKeyValue;
kvp(2, "Steve"); //Output: updateKeyValue: key = 2, value = Steve
/*
- In the above example, an interface `KeyValueProcessor` includes a method signature.
- Now, we can define a variable of type `KeyValueProcessor` which can only point to functions with the same signature as defined in the `KeyValueProcessor` interface.
- So, `addKeyValue` or `updateKeyValue` function is assigned to `kvp`. So, `kvp` can be called like a function.
*/
// Trying to assign a function with a different signature will cause an error.
function deleteKey(key) {
    console.log("Key deleted.");
}
kvp = deleteKey; //Compiler Error
var arrList = [1, 2, 3];
arrList[0];
arrList[1];
var str = {};
str["JS"] = "JavaScript";
str["TS"] = "TypeScript";
var userOne = {
    userName: "Sam",
    mobileNumber: 123123
};
var userTwo = {
    userName: "John",
    mobileNumber: 789789,
    address: "John street, swaden"
};
var employeeObj = { name: "Tommy", empCode: 123123 };
employeeObj.name = "Tommy Johnson";
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(name, code) {
        this.empCode = code;
        this.name = name;
    }
    EmployeeDetails.prototype.getSalary = function (empCode) {
        return 250000;
    };
    return EmployeeDetails;
}());
var emp = new EmployeeDetails("Sam", 123);
