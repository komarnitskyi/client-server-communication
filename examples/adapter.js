function Substraction() {
    this.first = null;
    this.second = null;
    this.setFirst = function(val) {
        this.first = val;
    }
    this.setSecond = function (val) {
        this.second = val;
    }
    this.calc = function () {
        return this.first - this.second;
    }
}



/**
 * Your vanilla code
 */
function Division() {
    this.calc = function (a, b) {
        return a / b;
    };
}

const division = new Division();
const substraction = new SubstractionAdapter(new Substraction());

function calculator(action, a, b) {
    console.log(action.calc(a, b));
}
calculator(division, 6, 3);
calculator(substraction, 6, 3);


function SubstractionAdapter(substraction) {
    this.calc = function(a, b) {
        substraction.setFirst(a);
        substraction.setSecond(b);
        return substraction.calc();
    }
}
