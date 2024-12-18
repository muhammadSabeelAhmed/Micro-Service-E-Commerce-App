const express = require('express');
const router = express.Router();
const axios = require('axios');
const Order = require('../models/Order');

router.post('/', async (req, res) => {
    const { userId, productId, quantity } = req.body;

    // Call Product Service to verify stock
    try {
        const response = await axios.get(`http://localhost:5002/products/${productId}`);
        const product = response.data;

        if (product.quantity < quantity) {
            return res.status(400).json({ message: 'Insufficient stock' });
        }

        const order = new Order({ userId, productId, quantity });
        await order.save();

        res.status(201).json({ message: 'Order placed successfully', order });
    } catch (error) {
        res.status(500).json({ message: 'Error placing order', error: error.message });
    }
});

router.get('/:userId', async (req, res) => {
    const orders = await Order.find({ userId: req.params.userId });
    res.json(orders);
});

module.exports = router;