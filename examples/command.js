function add(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}

function Command(action, undo, value) {
    this.action = action;
    this.undo = undo;
    this.value = value;
}

function AddCommand(value) {
    return new Command(add, substract, value);
}
function SubstractCommand(value) {
    return new Command(substract, add, value);
}

function Calculator() {
    this.currentValue = 0;
    this.commands = [];

    this.execute = function(command) {
        this.currentValue = command.action(this.currentValue, command.value);
        this.commands.push(command);
    };
    this.undo = function() {
        var command = this.commands.pop();
        this.currentValue = command.undo(this.currentValue, command.value);
    }
    this.getValue = function() {
        return this.currentValue;
    }
}

const calculator = new Calculator();
calculator.execute(new AddCommand(10));
calculator.execute(new AddCommand(20));
calculator.execute(new SubstractCommand(5));
calculator.execute(new SubstractCommand(5));
calculator.undo();
console.log(calculator.getValue());
