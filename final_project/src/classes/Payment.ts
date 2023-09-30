import { HasFormatter } from "../interfaces/HasFormatter.js"

export class Payment implements HasFormatter{
        constructor(
        readonly recipient:string, 
        private details:string,
        public amount:number
    ){}

    // contains the format method as prescribed by the interface
    format(){
        return `${this.recipient} is owed $${this.amount} for ${this.details}`
    }
}