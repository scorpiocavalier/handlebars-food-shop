const Express = require('express');
const Products = require('./products');

const app = Express();
const port = process.env.port || 4200;

app.use(Express.static('/frontend'));

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/products', (req, res) => {
  res.json(Products);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = Products.find((product) => product.id == productId);
  res.send(product.name);
});

app.listen(port, () => console.log(`Server listenning on port ${port}`));
