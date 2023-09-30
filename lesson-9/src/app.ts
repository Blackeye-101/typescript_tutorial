//interfaces
//use it enforce a certain type of structure within a class and not instantiate an object

interface IsPerson{
    name:string;
    age:number;
    
    speak(a: string):void;
    spend(a: number):number;
}

//method functionality can change but the signature remains the same as prescribed by the interface
const me:IsPerson={
    name:"rishabh",
    age:30,
    speak(text:string):void{
        console.log(text);
    },

    spend(amount:number):number{
        console.log('I spent', amount);
        return amount
    },
}

// let someone: IsPerson; // enforcing the rules on a variable

const greetPerson=(person: IsPerson)=>{
    console.log(`hello ${person.name}!!`)
}

greetPerson(me)

// console.log(me)

import { Invoice } from "./classes/Invoice.js"

const inv1=new Invoice('Rishabh', 'work on website', 500)
const inv2=new Invoice('Thakur', 'work on website', 600)

let invoices:Invoice[]=[]

invoices.push(inv1)
invoices.push(inv2)


invoices.forEach(inv=>{
    console.log(inv.client, inv.amount, inv.format())
})


const form=document.querySelector('.new-item-form') as HTMLFormElement

//inputs
const type=document.querySelector('#type') as HTMLSelectElement
const toFrom=document.querySelector('#tofrom') as HTMLInputElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement


form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})


