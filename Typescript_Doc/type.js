"use strict";
/* Types : A type alias is a name for any type.
 - Type aliases can be used to represent not only primitives but also object types, union types, tuples and intersections.
*/
exports.__esModule = true;
// We can implement type in class using `implements`
var Cow = /** @class */ (function () {
    function Cow() {
        this.name = "Rabbit";
        this.consumePlant = function (plant) {
            return "".concat(plant, " waste");
        };
    }
    return Cow;
}());
var cow = new Cow();
cow.name;
cow.consumePlant("grass");
