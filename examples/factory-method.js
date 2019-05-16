function Factory() {
        this.create = function(type) {
            this.person = null;
            switch (type) {
                case 'Bob':
                    this.person = new Bob();
                    break;
                case 'Piter':
                    this.person = new Piter();
                    break;
                default:
                    throw new Error('You should set the type');
            }
            this.person.prefix = 'Hello';
            return this.person;
        };
}

function Bob() {
    this.prefix = '';
    this.say = function() {
        console.log(`${this.prefix}, i'm Bob`);
    }
}
function Piter() {
    this.prefix = '';
    this.say = function () {
        console.log(`${this.prefix}, i'm Piter`);
    }
}

const person = new Factory();
const bob = person.create('Bob');
bob.say();
const piter = person.create('Piter');
piter.say();
