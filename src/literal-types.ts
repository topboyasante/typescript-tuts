//Sometimes we want to limit the values we can assign to a variable

//quanitity can only be set to 50
let quantity : 50

//quanitity can only be set to 50 or 100 
let quantity2 : 50 | 100

//literal types: give a type alias a defined set of values:
type Quantity = 50 | 100

type Metric = "cm" | "in"