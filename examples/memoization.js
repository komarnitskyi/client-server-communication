function add(a, b) {
    var i = 0;
    while(i < 100000000) {
        i++;
    }
    return a + b;
}
function memoization(fn) {
    const cache = {};

    return function(...args) {
        const hash = args.join('-');
        if (cache[hash]) {
            console.log('Get data from cache');
            return cache[hash];
        }

        console.log('Calculate data');
        cache[hash] = fn(...args);
        return cache[hash];
    }
}

const memoAdd = memoization(add);

console.log(memoAdd(2,3));
console.log(memoAdd(2,3));
console.log(memoAdd(2,4));
