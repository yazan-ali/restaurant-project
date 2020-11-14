const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
	deal_img: String,
	deal_name: String,
	deal_description: String,
	deal_price: String
});

module.exports = mongoose.model("Deals", dealSchema);