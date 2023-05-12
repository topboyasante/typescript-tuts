function calculateTax(income:number,taxYear:number):number{
    if(taxYear < 2022 ){
        return income * 1.2
    }
    else{
        return income * 1.3
    }
}

calculateTax(10_100,2022)

//If you want to make the year optional:
function calculateTaxWithYearOptional1(income:number,taxYear?:number):number{
    if((taxYear || 2022) < 2022 ){
        return income * 1.2
    }
    else{
        return income * 1.3
    }
}

calculateTaxWithYearOptional1(10_100)

function calculateTaxWithYearOptional2(income:number,taxYear = 2022):number{
    if(taxYear < 2022 ){
        return income * 1.2
    }
    else{
        return income * 1.3
    }
}

calculateTaxWithYearOptional2(10_100)