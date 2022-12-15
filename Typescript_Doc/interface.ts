/* Interface :
- Interface in typescript is types for the `Objecct`.
- Interface is usefull for validating the structure of an object in the case where we are creating an object,passing object as parameter.
- In typescript interface is defined with the help of the `interface` keyword.
- Javascript uses an interface for the type checking.
- The interface is also known as `duck typing` or `structural subtyping`.
- An interface can include properties and method declarations using function or an arrow function.
*/

// Example : interface
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

// Example : Extending interface
// Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface Rectangle {
  height: number;
  width: number;
}

interface ColoredRectangle extends Rectangle {
  color: string;
}

const coloredRectangle: ColoredRectangle = {
  height: 20,
  width: 10,
  color: "red",
};

// Interface as function type
interface KeyValueProcessor {
  (key: number, value: string): void;
}

function addKeyValue(key: number, value: string): void {
  console.log("addKeyValue: key = " + key + ", value = " + value);
}

function updateKeyValue(key: number, value: string): void {
  console.log("updateKeyValue: key = " + key + ", value = " + value);
}

let kvp: KeyValueProcessor = addKeyValue;
kvp(1, "Bill"); //Output: addKeyValue: key = 1, value = Bill

kvp = updateKeyValue;
kvp(2, "Steve"); //Output: updateKeyValue: key = 2, value = Steve

/*
- In the above example, an interface `KeyValueProcessor` includes a method signature.
- Now, we can define a variable of type `KeyValueProcessor` which can only point to functions with the same signature as defined in the `KeyValueProcessor` interface.
- So, `addKeyValue` or `updateKeyValue` function is assigned to `kvp`. So, `kvp` can be called like a function.
*/

// Trying to assign a function with a different signature will cause an error.
function deleteKey(key: number): void {
  console.log("Key deleted.");
}

kvp = deleteKey; //Compiler Error

// Interface for array type
// Here you can define type for an index as well as value
interface NumList {
  [index: number]: number;
}

let arrList: NumList = [1, 2, 3];
arrList[0];
arrList[1];

interface IStringList {
  [index: string]: string;
}

let str: IStringList = {};
str["JS"] = "JavaScript";
str["TS"] = "TypeScript";

/*
- In the above example, interface `NumList` defines a type of array with index as `number` and value as `number` type. 
- In the same way, `IStringList` defines a string array with index as `string` and value as `string`.
*/

// Interface with optional property
// Optional property can be marked with ?, so objects of `User` may or may not include this property.
interface User {
  userName: string;
  mobileNumber: number;
  address?: string;
}

let userOne: User = {
  userName: "Sam",
  mobileNumber: 123123,
};

let userTwo: User = {
  userName: "John",
  mobileNumber: 789789,
  address: "John street, swaden",
};

// Read only property
// We can mark a property as read only.This means that once a property is assigned a value, it can not be changed.
interface Employee {
  name: string;
  readonly empCode: number;
}

let employeeObj: Employee = { name: "Tommy", empCode: 123123 };

employeeObj.name = "Tommy Johnson";
// employeeObj.empCode = 12345123 Compiler error

// Implementing an interface

interface IEmployee {
  name: string;
  empCode: number;
  getSalary: (empCode: number) => number;
}

class EmployeeDetails implements IEmployee {
  name: string;
  empCode: number;

  constructor(name: string, code: number) {
    this.empCode = code;
    this.name = name;
  }
  getSalary(empCode: number): number {
    return 250000;
  }
}

let emp = new EmployeeDetails("Sam", 123);



export {};
