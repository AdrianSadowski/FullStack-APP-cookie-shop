const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  idOrder: { type: String, required: true },
  totalPrice: { type: Number, required: true },
  user: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    Mobile: { type: String, required: true },
    Email: { type: String, required: true },
    City: { type: String, required: true },
    Adress: { type: String, required: true },
  },
  cartData: [
    {
      _id: { type: String, required: true },
      title: { type: String, required: true },
      priceSingle: { type: String, required: true },
      amount: { type: String, required: true },
      image: { type: String, required: true },
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
