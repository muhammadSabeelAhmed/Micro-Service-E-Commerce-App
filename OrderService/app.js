const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/order');
const { connectDB } = require('./config/db');

const app = express();
app.use(bodyParser.json());

connectDB();
app.use('/orders', orderRoutes);

app.listen(5003, () => console.log('Order Service running on port 5003'));