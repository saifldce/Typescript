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

export {};
