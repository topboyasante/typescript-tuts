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