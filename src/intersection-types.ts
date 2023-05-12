//Intersection Types: Combination of two types into one type:
type Draggable = {
    drag : () => void,
}

type Resizable = {
    resize : () => void
}

type UIWidget = Draggable & Resizable;

const textBox : UIWidget = {
    drag : ()=>{},
    resize : ()=>{}
}