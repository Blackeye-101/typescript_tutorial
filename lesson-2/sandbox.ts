let char="mario"

let age=30

let isBlackBelt=false

// all of these give type errors (inferred type)
// =============================

// char=100

// age="yoshi"

// isBlackBelt="yes"


// explicitly defining the type that the variable can take
const circ=(diameter:number)=>{
    return diameter*Math.PI
}

// this would give a type error which it wouldn't have otherwise in vanilla JS
// console.log(circ('hello')) 

console.log(circ(7))

//arrays 
let names=["luigi", "mario","yoshi"]

names.push('toad')
// names.push(10) //type error

// mixed array

let mixed =["ken", 4, "luigi", false]

// all of these valid in an array whose inferred type is mixed

// mixed.push(true)
// mixed.push("hey")
// mixed.push(30)

// mixed[0]="Rishabh"

// mixed="Thakur" // can't override with value of other type

//objects
let ninja={
    name:"mario",
    isBlackBeltbelt:true,
    age:20
}

ninja.age=25
ninja.name="ryu"

// ninja.age="100"

// can't define a new property
// ninja.skills=["fighting", "sneaking"]

// even if we want to reassign it then the new object must've the same type and structure
