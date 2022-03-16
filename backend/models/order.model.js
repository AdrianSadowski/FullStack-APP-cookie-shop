const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  test: { type: String, required: true },
});

module.exports = mongoose.model('Order', orderSchema);
