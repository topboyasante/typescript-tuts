let sales : number = 123_456_789;
//large numbers are separated with underscores

//when you initialize a variable you don't need to annotate it with its data type eg.
//Line 1 can be written as: let sales = 123_456_789

let course:string = "Typescript"

let is_published: boolean = true

//when you declare a variable and don't initialize it, the type is set to "any" by default:
let level;
level = 1
level = "a"

//You need to explicitly state the parameter types in a function:
function print(document:any){
    console.log(document)
}
