//A union type is a value with more than one single type
function kgToLbs(weight:number | string):number
{
    //Narrowing
    if(typeof weight === "number"){
        return weight * 2.2
    }
    else{
        return parseInt(weight) * 2.2
    }
}