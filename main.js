console.log("Hello TypeScript!");
//Run with npx tsc "filename.ts"
//Implicit Types:
var helloWorld = "Hello World";
/*- Implicit Types: When you create a variable, TS stores its value as a type.
So when you try to change the type, say from a string to a number, It throws an error.*/
//Explicit Types:
var firstName;
var age;
//This means that stringAndNumber is an array with two types. It's first element MUST be a string and the second MUST be a number
var x = ["Hello", 10];
//Enums:
var Continents;
(function (Continents) {
    Continents[Continents["North_America"] = 0] = "North_America";
    Continents[Continents["South_America"] = 1] = "South_America";
    Continents[Continents["Africa"] = 2] = "Africa";
    Continents[Continents["Europe"] = 3] = "Europe";
    Continents[Continents["Antartica"] = 4] = "Antartica";
    Continents[Continents["Australia"] = 5] = "Australia";
})(Continents || (Continents = {}));
var region = Continents.Africa;
