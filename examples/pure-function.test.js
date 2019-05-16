function autoIncrement() {
    return ++increment;
}
function pureAutoIncrement(value) {
    return ++value;
}

it('autoIncrement function should be a Pure', () => {
    expect(autoIncrement()).toBe(0);
});
