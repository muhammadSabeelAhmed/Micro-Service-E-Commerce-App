const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { orderId, amount } = req.body;

    // Simulate payment processing
    const success = Math.random() > 0.5; // 50% chance of success

    if (success) {
        res.status(200).json({ message: 'Payment successful', orderId, amount });
    } else {
        res.status(400).json({ message: 'Payment failed', orderId, amount });
    }
});

module.exports = router;