import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS 
//========
//captures the properties on an object, which the object type can't
//capturing not just the type but also the specifics of the type
// const addUID=<T>(obj:T)=>{ // without extension
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'rishabh', age: 40 });
// let docTwo=addUID('hello') // doesn't give any errors unless we extend the class 
console.log(docOne.age);
//examples
//========
const docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
};
const docFour = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'Rishabh' }
};
console.log(docThree, docFour);
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const resOne = {
    uid: 22,
    resourceType: ResourceType.BOOK,
    data: "moby dick"
};
const resTwo = {
    uid: 22,
    resourceType: ResourceType.AUTHOR,
    data: { name: "Rishabh Thakur" }
};
console.log(resOne, resTwo);
