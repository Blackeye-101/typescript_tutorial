export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // contains the format method as prescribed by the interface
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
