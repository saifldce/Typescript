/* Interface :
- Interface in typescript is types for the `Objecct`.
- In typescript interface id defined with the help of the `interface` keyword.
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
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };


export {}
