function Iterator(items) {
    this.items = items;
    this.index = 0;
}
Iterator.prototype = {
    first: function() {
        this.reset();
        return this.items[this.index];
    },
    last: function () {
        this.index = this.items.length - 1;
        return this.items[this.index];
    },
    next: function() {
        return this.items[this.index++];
    },
    reset: function() {
        this.index = 0;
    },
    hasNext: function() {
        return this.index < this.items.length;
    }
};

const iterator = new Iterator([1, 2, 3]);
while(iterator.hasNext()) {
    console.log(iterator.next());
}
console.log(iterator.first());
console.log(iterator.last());

