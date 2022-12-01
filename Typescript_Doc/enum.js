"use strict";
/* Enum :
- Enums or enumerations are a new data type supported in TypeScript.
- Most object-oriented languages like Java and C# use enums. This is now available in TypeScript too.
- An enum is a special "class" that represents a group of constants (immutable variables).
- Enums come in two flavors string and numeric.
- Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
*/
exports.__esModule = true;
// Numeric Enum - Default value
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log(currentDirection);
// throws error as 'North' is not a valid enum
/* Error: "North" is not assignable to type 'CardinalDirections'.
         currentDirection = 'North';
*/
// Numeric Enum - Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection[CardinalDirection["North"] = 1] = "North";
    CardinalDirection[CardinalDirection["East"] = 2] = "East";
    CardinalDirection[CardinalDirection["South"] = 3] = "South";
    CardinalDirection[CardinalDirection["West"] = 4] = "West";
})(CardinalDirection || (CardinalDirection = {}));
// logs 1
console.log(CardinalDirection.North);
// logs 4
console.log(CardinalDirection.West);
// Numeric Enum - Fully initialized
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);
// String Enum
// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
var directions;
(function (directions) {
    directions["North"] = "North";
    directions["East"] = "East";
    directions["South"] = "South";
    directions["West"] = "West";
})(directions || (directions = {}));
// logs "North"
console.log(directions.North);
// logs "West"
console.log(directions.West);
