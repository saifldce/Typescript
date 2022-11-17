"use strict";
/* Classes
- `Class` in term of OOPs is a blueprint for creating objects.
- Typescript introduced `classes` to avail the benefits of `object-oriented` techniques like encapsulation and abstraction.
- The class in typescript is compiled to plain JavaScript functions by the typescript compiler to work across platforms and browser.
- A class can includes : Constructor, Properties and Methods
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// Example:
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.name = name;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
//Note: The TypeScript compiler will convert the above class to the following JavaScript code using closure:
/* Constructor :
- The constructor is special type of method which is called when creating an object.
- In TypeScript, the constructor method is always defined with the name `constructor.`
- In the constructor, member of the class is accessed using `this` keyword. e.g. `this.userID`,`this.userName`
*/
// Example : Class with constructor
var User = /** @class */ (function () {
    function User(id, name) {
        this.userID = id;
        this.userName = name;
    }
    return User;
}());
// It is not always necessary for a class to have a constructor
var UserTest = /** @class */ (function () {
    function UserTest() {
    }
    return UserTest;
}());
// Creating an object of a class
// Note: If the class includes a parameterized constructor,then we can pass values whilte creating object otherwise we cannot pass.
// For having constructor
var user = new User(123, "Johny Dep");
// For class without constructor
var userTest = new UserTest();
/* Inheritance :
- TypeScript classes can be extended to create new classes with inheritance, using the keyword extends.
*/
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(userID, name) {
        var _this = _super.call(this, name) || this;
        _this.userID = userID;
        return _this;
    }
    Customer.prototype.displayName = function () {
        console.log("Name = " + this.name + ", Customer Code = " + this.userID);
    };
    return Customer;
}(Person));
var customer = new Customer(100, "Bill");
customer.displayName(); // Name = Bill, Customer Code = 100
