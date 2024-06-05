const EventEmitter = require('events');

class Store extends EventEmitter {
    constructor() {
        super();
        this.stock = {
            'Laptop': 5,
            'Headphones': 10,
            'Smartphone': 7
        };
        this.on('purchase', this.deliverProduct.bind(this));
    }

    checkItemExist(item, quantity) {
        return this.stock[item] >= quantity;
    }

    prepareForDelivery(cart) {
        const availableItems = cart.filter(({ product, quantity }) => this.checkItemExist(product, quantity));
        return availableItems;
    }

    updateStock(cart) {
        cart.forEach(({ product, quantity }) => {
            this.stock[product] -= quantity;
        });
    }

    ship(availableItems) {
        console.log(`Shipping ${availableItems.map(item => `${item.quantity} ${item.product}`).join(', ')}...`);
    }

    deliverProduct(cart, store) {
        console.log(`Delivering ${cart.map(item => `${item.quantity} ${item.product}`).join(', ')} from ${store.constructor.name}...`);
        const availableItems = this.prepareForDelivery(cart);
        if (availableItems.length > 0) {
            this.updateStock(availableItems);
            console.log(`Items ready for shipping: ${availableItems.map(item => `${item.quantity} ${item.product}`).join(', ')}`);
            this.ship(availableItems);
        } else {
            console.log("No items available for shipping.");
        }
    }
}

module.exports = Store;