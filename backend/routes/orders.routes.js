const express = require('express');
const router = express.Router();

const Order = require('../models/order.model.js');

router.get('/orders', async (req, res) => {
  try {
    const result = await Order.find(); // dodać sortowanie .sort({created: -1})
    if(!result) res.status(404).json({order: 'Not Found'});
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/orders/:id', async (req, res) => {
  try {
    const result = await Order.findById(req.params.id);
    if(!result) res.status(404).json({order: 'Not Found'});
    else res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/orders/add', async (req, res) => {
  try {
    const newOrder = await new Order(req.body);
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;