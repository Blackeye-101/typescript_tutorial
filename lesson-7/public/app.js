"use strict";
//classes
//in js the default access modifier is public
class Invoice {
    // readonly client: string
    // private details: string
    // amount:number
    // constructor(c:string, d:string, a:number){
    //     this.client=c
    //     this.details=d
    //     this.amount=a
    // }
    // writing all of the above in a shorthand
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        // inv1.client='foobar' // can't change it here as well
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const inv1 = new Invoice('Rishabh', 'work on website', 500);
const inv2 = new Invoice('Thakur', 'work on website', 600);
// console.log(inv1.format())
// console.log(inv2.format())
let invoices = [];
// invoices.push("hello") // gives type error
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
    // inv.client='foobar' //can't do this since we have declared it to be readonly
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
