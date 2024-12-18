const express = require('express');
const bodyParser = require('body-parser');
const paymentRoutes = require('./routes/payment');

const app = express();
app.use(bodyParser.json());

app.use('/payments', paymentRoutes);

app.listen(5004, () => console.log('Payment Service running on port 5004'));