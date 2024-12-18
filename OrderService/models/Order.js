const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    userId: String,
    productId: String,
    quantity: Number,
    status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Order', OrderSchema);