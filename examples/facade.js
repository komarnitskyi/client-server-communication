function Facade(value) {
    this.value = value;
    this.doSomething = function() {
        if (complicatedFunction1(value)) {
            complicatedFunction2();
        }
        complicatedFunction3();
    }
}

function complicatedFunction1(value) {
    console.log(`Do something very complicated with ${value}`);
    return true;
}
function complicatedFunction2() {
    console.log('Do something complicated');
}
function complicatedFunction3() {
    console.log('Do something else');
}


const doIt = new Facade('Some data');
doIt.doSomething();
