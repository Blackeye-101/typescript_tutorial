export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // contains the format method as prescribed by the interface
    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
}
