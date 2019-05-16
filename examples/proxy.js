function ConsoleProxy() {
    this.log = function(message) {
        console.log('======== BEFORE ========');
        console.log(message);
        console.log('======== AFTER ========');
    }
}

const console2 = new ConsoleProxy();
console2.log('Hello');
