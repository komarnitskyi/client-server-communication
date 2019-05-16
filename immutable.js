const arr = [1, 2, 3, 4, 5, 6];

function walk(a) {
    a.map(el => console.log(el));
}
function dirty() {
    console.log('Do some action somewhere in your code and...');
    arr[3] = 100;
}
dirty();
walk(arr);
