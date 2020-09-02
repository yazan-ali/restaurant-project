const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    cartItem: Object,
    user_id: String
})

module.exports = mongoose.model("Cart", cartSchema);