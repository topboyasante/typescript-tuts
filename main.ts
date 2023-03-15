console.log("Hello TypeScript!")

//Run with npx tsc "filename.ts"

//Implicit Types:
let helloWorld = "Hello World"

/*- Implicit Types: When you create a variable, TS stores its value as a type. 
So when you try to change the type, say from a string to a number, It throws an error.*/


//Explicit Types:
let firstName : string
let age :number

/*- Explicit Types: When you create a variable, you specify its type. 
So when you try to change the type, say from a string to a number, It throws an error.*/


//Tuples: Allows you to express an array with a fixed number of elements whose types are known, but don't need to be the same.
type stringAndNumber = [string,number]
//This means that stringAndNumber is an array with two types. It's first element MUST be a string and the second MUST be a number
let x : stringAndNumber = ["Hello", 10]


//Enums: Represents a Group of Constants
enum Continents{
    North_America,
    South_America,
    Africa,
    Europe,
    Antartica,
    Australia
}

var region = Continents.Africa

//Interfaces: They describe the range of "shapes" JS objects can take.
interface User {
    name:string;
    id:number;
}

const user: User = {
    name:'John',
    id:0
}

//Composing Types -> Union : Defines a range of values that a type has.
type WindowStates = "open" | "closed" | "minimized" ;
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5| 7 | 9;

const anOddNumberUnderTen : OddNumbersUnderTen = 5;
const windowState : WindowStates = "open";