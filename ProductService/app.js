const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/product');
const { connectDB } = require('./config/db');

const app = express();
app.use(bodyParser.json());

connectDB();
app.use('/products', productRoutes);

app.listen(5002, () => console.log('Product Service running on port 5002'));