import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Invoice implements HasFormatter{
        constructor(
        readonly client:string, 
        private details:string,
        public amount:number
    ){}

    // contains the format method as prescribed by the interface
    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}