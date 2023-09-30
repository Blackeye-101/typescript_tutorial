import { Invoice } from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"


//EXAMPLES
//========

// let doc1:HasFormatter
// let doc2:HasFormatter
 
// doc1=new Invoice('mario', 'web work', 250)
// doc2=new Payment('luigi', 'web work', 250)

// let docs:HasFormatter[]=[]

// docs.push(doc1)
// docs.push(doc2)

// console.log(docs)

// const inv1=new Invoice('Rishabh', 'work on website', 500)
// const inv2=new Invoice('Thakur', 'work on website', 600)

// let invoices:Invoice[]=[]

// invoices.push(inv1)
// invoices.push(inv2)


// invoices.forEach(inv=>{
//     console.log(inv.client, inv.amount, inv.format())
// })


const form=document.querySelector('.new-item-form') as HTMLFormElement

//inputs
const type=document.querySelector('#type') as HTMLSelectElement
const toFrom=document.querySelector('#tofrom') as HTMLInputElement
const details=document.querySelector('#details') as HTMLInputElement
const amount=document.querySelector('#amount') as HTMLInputElement


form.addEventListener('submit', (e: Event)=>{
    e.preventDefault();

    let doc:HasFormatter

    if(type.value==='invoice'){
        doc=new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }else{
        doc=new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    console.log(
        doc.format()
    )
})


