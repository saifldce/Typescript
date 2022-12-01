/* Decorators : Decorators are a way of wrapping an existing peice of code with desired values and functionality
   to create a new modified version of it.
- Decorators use the form `@expression`, where `expression` must evaluate to a function that will be called at runtime
  with information about the decorated declaration
- Currently decorators are an experimental feature that may change in near future.
- To enable experimental support for decorators, you must enable the `experimentalDecorators` compiler option either on the command line or in tsconfig.json.
- Following steps are performed when evaluating multiple decorators on a single declaration in Typescript:
1. Decorator expression are evaluated in Top-to-Bottom.
2. Result return by the are in Bottom-to-Top.
 */
// Example :
var firstMessage = function () {
    console.log("firstMessage(): factory evaluated");
    return function (target, propertyKey) {
        console.log("firstMessage() calling here");
    };
};
var secondMessage = function () {
    console.log("secondMessage(): factory evaluated");
    return function (target, propertyKey) {
        console.log("secondMessage() calling here");
    };
};
// Create a class declare decorators
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
/* Output :
firstMessage(): factory evaluated
secondMessage(): factory evaluated
secondMessage() calling here
firstMessage() calling here
*/
/* In the above example, the functin that we return takes two parameters:
 1. target :  It only refers to the prototype of the class and not the actual class instance.
 2.propertyKey : It is the name of the property.
*/ 
