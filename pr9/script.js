const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let products = [];

// CRUD operations
// Create
app.post('/api/products', (req, res) => {
    const product = req.body;
    product.id = products.length + 1;
    products.push(product);
    res.status(201).send(product);
});

// Read
app.get('/api/products', (req, res) => {
    res.send(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.send(product);
});

// Update
app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');

    product.name = req.body.name;
    product.price = req.body.price;
    res.send(product);
});

// Delete
app.delete('/api/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) return res.status(404).send('Product not found');

    const deletedProduct = products.splice(productIndex, 1);
    res.send(deletedProduct);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


app.use(express.static('public'));
