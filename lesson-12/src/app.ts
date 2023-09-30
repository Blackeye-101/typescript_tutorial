import { Invoice } from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

const form=document.querySelector('.new-item-form') as HTMLFormElement

//inputs
const type=document.querySelector('#type') as HTMLSelectElement
const toFrom=document.querySelector('#tofrom') as HTMLInputElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement

//list template instance
const ul=document.querySelector('ul')!
const list=new ListTemplate(ul)


form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    let doc:HasFormatter

    if(type.value==='invoice'){
        doc=new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else{
        doc=new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc, type.value, 'end')
    
})

//GENERICS 
//========
//captures the properties on an object, which the object type can't
//capturing not just the type but also the specifics of the type
// const addUID=<T>(obj:T)=>{ // without extension
const addUID=<T extends {name:string}>(obj: T)=>{ // will allow only the object having a name property
    let uid=Math.floor(Math.random()*100)
    return {...obj, uid}
}

let docOne=addUID({name: 'rishabh', age:40})
// let docTwo=addUID('hello') // doesn't give any errors unless we extend the class 

console.log(docOne.age)

//generics with interfaces

interface Resource<T>{
    uid:number
    resourceName: string
    data: T
}

//examples
//========
const docThree: Resource<string>={
    uid:1,
    resourceName: 'person',
    data: 'shaun'
}

const docFour: Resource<object>={
    uid:1,
    resourceName: 'person',
    data: {name: 'Rishabh'}
}

console.log(docThree, docFour)

//ENUMS

enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T>{
    uid:number
    resourceType: ResourceType
    data:T
}

const resOne: Resource<string>={
    uid:22,
    resourceType: ResourceType.BOOK
    data: "moby dick"
}
const resTwo: Resource<object>={
    uid:22,
    resourceType: ResourceType.AUTHOR
    data: {name:"Rishabh Thakur"}
}

console.log(resOne, resTwo)


