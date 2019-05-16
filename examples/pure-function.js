var increment = 0;
function autoIncrement() {
    return ++increment;
}
var current = autoIncrement();
console.log(current);


function pureAutoIncrement(value) {
    return ++value;
}
var current = autoIncrement(1);
console.log(current);
