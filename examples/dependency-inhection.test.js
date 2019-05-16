function DB() {
    this.query = function() { return Math.random(); }
}

const dataBase = new DB();


function userMethodGetOne() {
    const res = dataBase.query();
    return res;
}

it('We can test userMethodGetOne', () => {
    expect(userMethodGetOne()).toBe(0.7281786692061754);
});
