// const simple = {
//     a: 1,
//     b: 2
// };

// const anotherSimple = simple;
// console.log(anotherSimple, anotherSimple === simple);

function Singletone() {
    if (this.__proto__.instance) return this.__proto__.instance;

    this.name = 'Bob';
    this.__proto__.instance = this;
    return this.__proto__.instance;
}
function Singletone1() {
    if (this.__proto__.instance) return this.__proto__.instance;

    this.name = 'Bob';
    this.__proto__.instance = this;
    return this.__proto__.instance;
}
const withProto = new Singletone();
const withProto1 = new Singletone();
const withProto2 = new Singletone1();
console.log(withProto, withProto1, withProto === withProto1);
console.log(withProto.__proto__.instance);
console.log(withProto2.__proto__.instance);
