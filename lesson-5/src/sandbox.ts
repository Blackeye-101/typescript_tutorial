let greet=()=>{
    console.log("hello world")
}

// greet ="hello" // since the type is function

let foo: Function

foo=()=>{
    console.log("hello again")
}

const add=(a:number, b:number, c?:number|string, d:number=10)=>{
    // c is an optional parameter
    // d is a parameter with default value as 10
    // optional and default parameters must be put in the end (a good practice)
    console.log(a+b+d)
    console.log(c)
}

add(2,3)

//either specify the return type explicitly or let typescript infer it automatically
const minus=(a:number, b:number):number=>{
    return a-b
}

let result=minus(10,7)

// result="Rishabh"

//type aliases
//============

type StringOrNum=string|number // creating a type alias (user defined nickname to a complex type)
type ObjWithname={name:string, uid:StringOrNum}

const logDetails=(uid: StringOrNum, item:string)=>{
    console.log(`${item} has a uid of ${uid}`)
}

const greeting=(user:ObjWithname)=>{
    console.log(`${user.name} says hello`)
}
const greetAgain=(user:ObjWithname)=>{
    console.log(`${user.name} says hello`)
}

//function signature
//=================

// example-1
let foobar:(a:string, b:string)=>void;
foobar=(name:string, greeting:string)=>{
    console.log(`${greeting} ${name}`)
}

// example-2
let calc: (a:number, b:number, c:string)=>number;

calc=(numOne:number, numTwo:number, action:string)=>{
    if(action=='add')return numOne+numTwo
    else return numOne-numTwo
}

//example-3

let logger:(obj:{name:string, age:number})=>void

logger=(ninja:{name:string, age:number})=>{
    console.log(`${ninja.name} is ${ninja.age} yrs old`)
}




