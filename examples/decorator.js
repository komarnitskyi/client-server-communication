function User(name) {
    this.name = name;
    this.say = function() {
        console.log(`Hello, I'm ${this.name}`);
    }
}
function ExtendedUser(user, surname) {
    this.user = user;
    this.name = user.name;
    this.surname = surname;
    this.say = function () {
        console.log(`Hello, I'm ${this.name} ${this.surname}`);
    }
}

const Bob = new User('Bob');
const BobMarko = new ExtendedUser(Bob, 'Marko');
BobMarko.say();
