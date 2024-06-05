const Shop = require('./shop');
const Store = require('./store');

const shop = new Shop();

const store = new Store();

shop.addToCart('Laptop');
shop.addToCart('Headphones');
shop.addToCart('Smartphone');
shop.processCart(store);