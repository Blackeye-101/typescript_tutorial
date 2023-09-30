// const anchor=document.querySelector('a')!

// if(anchor){
//     console.log(anchor)
// }

//using the exclamation mark incase we're sure that the value is not null
// console.log(anchor.href)

// const form=document.querySelector('form')!

//typecasting it to be of a certain type
const form=document.querySelector('.new-item-form') as HTMLFormElement

// console.log(form.children)

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


