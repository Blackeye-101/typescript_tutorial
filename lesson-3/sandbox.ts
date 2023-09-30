// explicit types
let character: string
let age: number
let isLoggedIn: boolean

age=30
 
isLoggedIn=true
// isLoggedIn="Ravi"

//arrays
let ninjas: string[];

ninjas=["Rishabh", "Thakur"]
// ninjas=[10,20]

let arr: number[]=[] // initialising the array as an empty array

arr.push(10)

//mixed type array
//union type

let mixed:(string|number)[]=[]
mixed.push("hello")
mixed.push(20)
// mixed.push(false)

console.log(mixed)

let uid: string|number; // can also make a mixed type variable

uid=123
console.log(uid)
uid='123'
console.log(uid)

//objects
let obj:object
obj={name:'Rishabh', age:30}

let obj2:{
    name:string,
    age:number,
    isBlackBelt:boolean,
}

//dynamic(any) type
// but it strips typescript of any benefit it has whatsoever, just like reverting to js

let num: any=25

num="rishabh"

console.log(num)


let mixedArray: any[]=[]
mixedArray.push("rishabh")
mixedArray.push(20)
mixedArray.push(true)

console.log(mixedArray)


let mixedObject:{
    name:any,
    age:any
}

mixedObject={
    name:80085,
    age:true
}

console.log(mixedObject)
