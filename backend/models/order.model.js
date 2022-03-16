const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  title: {type: String, required: true},
  price: {type: String, required: true},
  image: {type: String},
});

module.exports = mongoose.model('Order', orderSchema);