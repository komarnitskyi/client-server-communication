function Person(name) {
    this.prefix = '';
    this.say = function () {
        console.log(`${this.prefix}, i'm ${name}`);
    }
}

function PersonFactory() {
    this.create = function (name, welcomeText) {
        const person = new Person(name);
        person.prefix = welcomeText;
        return person;
    };
}

const personFactory = new PersonFactory();
const bob = personFactory.create('Bob', 'Hello');
bob.say();
const piter = personFactory.create('Piter', 'Hello');
piter.say();
