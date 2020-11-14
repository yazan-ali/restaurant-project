var mongoose = require("mongoose");

var dessertSchema = new mongoose.Schema({
	dessert_img: String,
	dessert_name: String,
	dessert_description: String,
	dessert_price: String,
});

module.exports = mongoose.model("Desserts", dessertSchema);