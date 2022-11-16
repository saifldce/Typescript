/* Enum :
- Enums or enumerations are a new data type supported in TypeScript. 
- Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.
- An enum is a special "class" that represents a group of constants (immutable variables).
- Enums come in two flavors string and numeric.
- Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
*/

// Numeric Enum - Default value
enum CardinalDirections {
  North,
  East,
  South,
  West,
}
let currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
/* Error: "North" is not assignable to type 'CardinalDirections'.
         currentDirection = 'North'; 
*/

// Numeric Enum - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirection {
  North = 1,
  East,
  South,
  West,
}
// logs 1
console.log(CardinalDirection.North);
// logs 4
console.log(CardinalDirection.West);

// Numeric Enum - Fully initialized
enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

// String Enum
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
enum directions {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
// logs "North"
console.log(directions.North);
// logs "West"
console.log(directions.West);


export {};
