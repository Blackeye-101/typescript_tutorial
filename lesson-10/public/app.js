import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
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
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc.format());
});
