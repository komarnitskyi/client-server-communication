function Delivery() {
    this.handler = null;
    this.setStrategy = strategy => this.handler = strategy;
    this.calculate = () => this.handler.calculate();
}
function NovaPoshta() {
    this.calculate = () => 25;
}
function FedEx() {
    this.calculate = () => 500;
}

const delivery = new Delivery();
delivery.setStrategy(new NovaPoshta());
console.log(delivery.calculate());

delivery.setStrategy(new FedEx());
console.log(delivery.calculate());

