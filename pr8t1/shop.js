const EventEmitter = require('events');

class OnlineShop extends EventEmitter {
    constructor() {
        super();
        this.cart = [];
    }

    addToCart(product, quantity) {
        console.log(`Adding  to the cart...`);
        this.cart.push({ product, quantity });
    }

    processCart(store) {
        console.log("Processing the cart...");
        this.emit('purchase', this.cart, store);
    }
}

module.exports = OnlineShop;