const express = require('express');
const Products = require('./products');
const path = require('path');

const app = express();
const port = process.env.port || 4200;

app.use(express.static('frontend'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/products', (req, res) => {
  res.json(Products);
});

app.get('/products/:id', (req, res) => {
  const productId = req.params.id;
  const product = Products.find((product) => product.id == productId);
  res.send(product.name);
});

app.post('/add', (req, res) => {
  const { id, name } = req.body;
  console.log(id, name);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Server listenning on port ${port}`));
