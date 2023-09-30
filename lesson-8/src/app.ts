import {Invoice} from "./classes/invoice.js"

//only the modern browsers support the browser system
//doesn't bundle our code into a single file (makes multiple requests for the two files)

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


