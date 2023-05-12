type Customer = {
    birthday: Date
}
type ConditionalCustomer = {
    birthday? :Date
}

function getCustomer(id:number) : Customer | ConditionalCustomer | null {
    return id === 0 ? null : {birthday:new Date()}
}

let customer = getCustomer(0)
//optional property access operator
console.log(customer?.birthday)
console.log(customer?.birthday?.getFullYear())

//optional element access operator:
//customers?.[0]


//optional call operator:
//function?.()