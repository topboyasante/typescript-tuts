//Enums: A list of related constants:
/*
    Pascal Naming is used .The first letter of each word is capitalized.By default,
    TS assigns each member of an enum a value from 0 upwards. You can change the values
    to your choosing.You can also set the value for the first value and TS will do the rest.
*/
enum SizeOfShirts {Small=1,Medium,Large}
let mySize: SizeOfShirts = SizeOfShirts.Medium
console.log(mySize)