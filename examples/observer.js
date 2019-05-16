function Observer() {
    this.handlers = [];
    this.subscribe = function(fn) {
        this.handlers.push(fn);
    };
    this.unsubscribe = function (fn) {
        this.handlers = this.handlers.filter(item => item.toString() !== fn.toString());
    };
    this.trigger = function (data, context) {
        this.handlers.map(fn => {
            fn.call(context, data);
        });
    };
}

const observer = new Observer();
observer.subscribe(data => console.log(data));
observer.subscribe(data => console.info(data));
observer.unsubscribe(data => console.log(data));
observer.trigger([1,2], {});
