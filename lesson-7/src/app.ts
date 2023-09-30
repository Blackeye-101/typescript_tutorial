//classes
//in js the default access modifier is public
class Invoice{
    // readonly client: string
    // private details: string
    // amount:number

    // constructor(c:string, d:string, a:number){
    //     this.client=c
    //     this.details=d
    //     this.amount=a
    // }

    // writing all of the above in a shorthand
    constructor(
        readonly client:string, 
        private details:string,
        public amount:number
    ){}

    format(){
        // inv1.client='foobar' // can't change it here as well
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const inv1=new Invoice('Rishabh', 'work on website', 500)
const inv2=new Invoice('Thakur', 'work on website', 600)

// console.log(inv1.format())
// console.log(inv2.format())

let invoices:Invoice[]=[]
// invoices.push("hello") // gives type error

invoices.push(inv1)
invoices.push(inv2)


invoices.forEach(inv=>{
    // inv.client='foobar' //can't do this since we have declared it to be readonly
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


