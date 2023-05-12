type Employee = {
    id:number,name:string,retire:(date:Date)=>void
}

let employeeJB : Employee = {
    id: 1,
    name:"Jeff Bezos",
    retire:(date:Date)=>{
        console.log(date)
    }
}