/* Classes
- `Class` in term of OOPs is a blueprint for creating objects.
- Typescript introduced `classes` to avail the benefits of `object-oriented` techniques like encapsulation and abstraction.
- The class in typescript is compiled to plain JavaScript functions by the typescript compiler to work across platforms and browser.
- A class can includes : Constructor, Properties and Methods
 */

// Example:
class Employee {
  empCode: number;
  name: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.name = name;
  }

  getSalary(): number {
    return 10000;
  }
}

//Note: The TypeScript compiler will convert the above class to the following JavaScript code using closure:

/* Constructor :
- The constructor is special type of method which is called when creating an object.
- In TypeScript, the constructor method is always defined with the name `constructor.`
- In the constructor, member of the class is accessed using `this` keyword. e.g. `this.userID`,`this.userName`
*/

// Example : Class with constructor
class User {
  userID: number;
  userName: string;

  constructor(id: number, name: string) {
    this.userID = id;
    this.userName = name;
  }
}

// It is not always necessary for a class to have a constructor
class UserTest {
  userID: number;
  userName: string;
}

// Creating an object of a class
// Note: If the class includes a parameterized constructor,then we can pass values whilte creating object otherwise we cannot pass.

// For having constructor
let user = new User(123, "Johny Dep");

// For class without constructor

let userTest = new UserTest();

/* Inheritance :
- TypeScript classes can be extended to create new classes with inheritance, using the keyword extends. 
*/
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Customer extends Person {
  userID: number;

  constructor(userID: number, name: string) {
    super(name);
    this.userID = userID;
  }

  displayName(): void {
    console.log("Name = " + this.name + ", Customer Code = " + this.userID);
  }
}

let customer = new Customer(100, "Bill");
customer.displayName(); // Name = Bill, Customer Code = 100

// Note: We must call super() method first before assigning values to properties in the constructor of the derived class

// Class implements interface
interface IPerson {
  name: string;
  display(): void;
}
interface ICustomer {
  customerID: number;
}

class CustomerDetails implements IPerson, ICustomer {
  name: string;
  customerID: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.customerID = id;
  }

  display(): void {
    console.log("Name = " + this.name + ", Custome Id = " + this.customerID);
  }
}

let per: IPerson = new CustomerDetails("Johny Dep", 123);
per.display(); // Name = Johny Dep, Customer Id = 123

let cust: ICustomer = new CustomerDetails("Johny Dep", 123);

//Compiler Error: Property 'display' does not exist on type 'IEmployee'
// cust.display()

// Interface extends classs
/*
- Here, `IClass` is an interface that extends `Teacher` class.
- So we can declare a variable of type `IClass` with two properties.
- So now, we must declare and initialize value at the same time.
 */

class Teacher {
  name: string;
}

interface IClass extends Teacher {
  teacherID: number;
}

let std: IClass = { teacherID: 123, name: "Johson" };

/* Method Overriding 
- Method overriding occurs when a subclass (child class) has the same method as the parent class.
- When a child class defines its own implementation of a method from the parent class, it is called method overriding.
*/

class Boy {
  name: string;
  about(): void {
    console.log(this.name + " is an intelligent boy..");
  }
}

class Student extends Boy {
  rollNumber: number;
  marks: number;
  constructor(rollNumber: number, marks: number, name1: string) {
    super();
    this.rollNumber = rollNumber;
    this.marks = marks;
    this.name = name1;
  }
  displayInfo(): void {
    console.log(
      "Name : " +
        this.name +
        ", Roll Number : " +
        this.rollNumber +
        ", Scores : " +
        this.marks +
        " out of 100"
    );
  }

  about(): void {
    console.log(this.name + "scores well..");
  }
}

let student = new Student(26, 89, "San");
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

let callSuper = new Student(26, 89, "San");
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
abstract class AbsPerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  display(): void {
    console.log(this.name);
  }

  abstract find(string): AbsPerson;
}

class AbsEmployee extends AbsPerson {
  empCode: number;

  constructor(name: string, code: number) {
    super(name);
    this.empCode = code;
  }

  find(name: string): AbsPerson {
    return new AbsEmployee(name, 1);
  }
}

let emp: AbsPerson = new AbsEmployee("Joy", 101);
emp.display(); // Joy
// let emp2: AbsPerson = emp2.find('Steve'); //throw an error
/*
- In the above example, `AbsPerson` is an abstract class which includes one property `name` and two methods one of which is declared as abstract.
- Here, `find()` method is an abstract method so must be defined in the derived class.
- The `AbsEmployee` is derived from `AbsPerson` class so it must define `find()` method as abstract.
- The `AbsEmployee` class must implement all the abstract method of the `AbsPerson` class, otherwise the compiler will show an error.
- Note : The class which implements an abstract class must call super() in the constructor.
*/
export {};
