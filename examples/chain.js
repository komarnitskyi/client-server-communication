function gQuery(selector) {
    this.selector = selector;
    this.find = function(el) {
        console.log(`Do something to find "${el}"`);
        this.selector = el;
        return this;
    }
    this.addClass = function (className) {
        console.log(`Do something to add className "${className}"`);
        this.selector += `.${className}`;
        return this;
    }
    this.getSelector = function () {
        return this.selector;
    }
}

const el = new gQuery('div').find('a').addClass('active').getSelector();
console.log(el);
