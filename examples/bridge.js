/** Abstraction */
function Store(implementation) {
    this.setItem = function(key, value) {
        implementation.setItem(key, value);
    };
    this.getItem = function(key) {
        return implementation.getItem(key);
    };
    this.clear = function() {
        implementation.clear();
    };
}

/** Implementation */
function FileStorage() {
    this.setItem = function (key, value) {
        console.log('saved');
    };
    this.getItem = function (key) {
        console.log('got');
    };
    this.clear = function () {
        console.log('clear');
    };
}


function Cache(store) {
    this.set = function(data, hash) {
        store.setItem(hash, JSON.stringify(data));
    }
    this.get = function (hash) {
        return store.getItem(hash);
    }
    this.clear = function () {
        return store.clear();
    }
}

/** User code */
let store;
if(typeof window != 'undefined') {
    store = new Store(localStorage);
} else {
    const fileStorage = new FileStorage();
    store = new Store(fileStorage);
}
const cache = new Cache(store);
cache.set({key: 111}, 'aaa');
cache.get('aaa');
cache.clear();
