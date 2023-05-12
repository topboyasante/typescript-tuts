let employee1:{id:number,name:string} = {
    id:1,
    name:"Nana Kwasi Asante"
}

//If you want to some properties read-only:
let employee2:{readonly id:number,name:string} = {
    id:1,
    name:"Nana Kwasi Asante"
}

//Methods
let employee3:{id:number,name:string,retire:(date:Date)=>void} = {
    id:1,
    name:"Nana Kwasi Asante",
    retire:(date:Date)=>{
        console.log(date)
    }
}