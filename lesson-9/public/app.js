//interfaces
//use it enforce a certain type of structure within a class and not instantiate an object
//method functionality can change but the signature remains the same as prescribed by the interface
const me = {
    name: "rishabh",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    },
};
// let someone: IsPerson; // enforcing the rules on a variable
const greetPerson = (person) => {
    console.log(`hello ${person.name}!!`);
};
greetPerson(me);
// console.log(me)
import { Invoice } from "./classes/Invoice.js";
const inv1 = new Invoice('Rishabh', 'work on website', 500);
const inv2 = new Invoice('Thakur', 'work on website', 600);
let invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(inv => {
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
