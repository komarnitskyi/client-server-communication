function add(a, b) {
    return a + b;
}

function addPartial(value) {
    return function(b) { return add(value, b)}
}

const add5to = addPartial(5);
console.log(add5to(3));
console.log(addPartial(5)(3));
