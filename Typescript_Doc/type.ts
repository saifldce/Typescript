/* Types : A type alias is a name for any type. 
 - Type aliases can be used to represent not only primitives but also object types, union types, tuples and intersections.
*/

// Example :

type IBase = {
  id?: string;
  isActive?: boolean;
  createdAt?: string;
  createdBy?: string;
  updatedAt?: string;
  updatedBy?: string;
};

// We can extend the type object by using & keyword
type ICardPrice = IBase & {
  type: string;
  size: string;
  sellPrice: number;
  salePrice: number;
  onSale: boolean;
  isDefault: boolean;
};

/* In the given example, we take a base type `Animal` and then extended with `Herbivore` and add another attributes.
- From there we can see that creating a `class` that `implements` that `type` can provide values to them and then an instance of a class can utilize those attributes.
- We can also extends `Animal` by using `interface`:
    interface Demo extends Animal {
     name = "Got"   
    }
*/
type Animal = {
  name: string;
};

type Herbivore = Animal & {
  consumePlant(plant: string): string;
};

// We can implement type in class using `implements`

class Cow implements Herbivore {
  name = "Rabbit";
  consumePlant = (plant: string) => {
    return `${plant} waste`;
  };
}

const cow = new Cow();
cow.name;
cow.consumePlant("grass");

// Union types can only be achieved with the `type` keyword :
/* In this example we are taking two different `types` and creating a combination of both.
- This is called `union` type.
Note : 
    1. We cannot use `extends` on an `interface` with a `type` if we use the `union` operator `|` within our `type` definition.
    2. We cannot use `implements` on a `class` with a `type` if we use `union` operator `|` within our `type` definition.  
*/
type Fruits = "apple" | "mango" | "orange";
type Vegitable = "carrot" | "broccoli" | "lettuce";

type HealthyFoods = Fruits | Vegitable;

/* Conclusion : In typscript `interface` and `type` alias is same but the difference is :
 - We are not able to create `union`,`intersection` or tuple with an `interface` so use a `type` in when creating them.
*/

