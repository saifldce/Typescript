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
var CustomerDetails = /** @class */ (function () {
    function CustomerDetails(name, id) {
        this.name = name;
        this.customerID = id;
    }
    CustomerDetails.prototype.display = function () {
        console.log("Name = " + this.name + ", Custome Id = " + this.customerID);
    };
    return CustomerDetails;
}());
var per = new CustomerDetails("Johny Dep", 123);
per.display(); // Name = Johny Dep, Customer Id = 123
var cust = new CustomerDetails("Johny Dep", 123);
//Compiler Error: Property 'display' does not exist on type 'IEmployee'
// cust.display()
// Interface extends classs
/*
- Here, `IClass` is an interface that extends `Teacher` class.
- So we can declare a variable of type `IClass` with two properties.
- So now, we must declare and initialize value at the same time.
 */
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    return Teacher;
}());
var std = { teacherID: 123, name: "Johson" };
/* Method Overriding
- Method overriding occurs when a subclass (child class) has the same method as the parent class.
- When a child class defines its own implementation of a method from the parent class, it is called method overriding.
*/
var Boy = /** @class */ (function () {
    function Boy() {
    }
    Boy.prototype.about = function () {
        console.log(this.name + " is an intelligent boy..");
    };
    return Boy;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(rollNumber, marks, name1) {
        var _this = _super.call(this) || this;
        _this.rollNumber = rollNumber;
        _this.marks = marks;
        _this.name = name1;
        return _this;
    }
    Student.prototype.displayInfo = function () {
        console.log("Name : " +
            this.name +
            ", Roll Number : " +
            this.rollNumber +
            ", Scores : " +
            this.marks +
            " out of 100");
    };
    Student.prototype.about = function () {
        console.log(this.name + "scores well..");
    };
    return Student;
}(Boy));
var student = new Student(26, 89, "San");
student.displayInfo(); // Output : San, Roll Number : 26, Scores : 89 out of 100
student.about(); //Output :  San scores well..
/* To call Super Class method from Sub Class :
- Immediate super class methods could be called from sub class using `super` keyword.
- We can display the result of the Parent class method also inside the child’s class overridden parent class method with the help of `super` keyword.
- Replace below method with that of `Student` class method and run the program.
- The `about()` method in `Boy` class is executed for super.about().
---------------------------------------------------------------------------------
about(): void {
  super.about()
  console.log(this.name + "scores well..");
}
*/
var callSuper = new Student(26, 89, "San");
callSuper.displayInfo(); // Output : San, Roll Number : 26, Scores : 89 out of 100
// San is an intelligent boy..
callSuper.about(); //Output :  San scores well..
/* Abstract class :
- An `abstract` class typically includes one or more abstract methods or property declarations.
- The class which extends the abstract class must define all the abstract methods.
- Abstract classes are mainly for inheritance where other classes may derive from them. We cannot create an instance of an abstract class.
- Abstract class are created by using `abstract` keyword.
*/
// Example : The following abstract class declares one abstract method `find` and also include normal method `display`
var AbsPerson = /** @class */ (function () {
    function AbsPerson(name) {
        this.name = name;
    }
    AbsPerson.prototype.display = function () {
        console.log(this.name);
    };
    return AbsPerson;
}());
var AbsEmployee = /** @class */ (function (_super) {
    __extends(AbsEmployee, _super);
    function AbsEmployee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.empCode = code;
        return _this;
    }
    AbsEmployee.prototype.find = function (name) {
        return new AbsEmployee(name, 1);
    };
    return AbsEmployee;
}(AbsPerson));
var emp = new AbsEmployee("Joy", 101);
emp.display(); // Joy
