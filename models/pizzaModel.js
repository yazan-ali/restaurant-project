const mongoose=require("mongoose");

const pizzaSchema =new mongoose.Schema({
	pizza_type:String,
	pizza_img:String,
	pizza_name:String,
	pizza_description:String,
    pizza_size:{
		size_1:String,
		size_2:String,
		size_3:String
	},
	dough_type:{
		type_1:String,
		type_2:String,
		type_3:String,
		type_4:String,
		type_5:String,
	},
	pizza_price:{
		type_1: {
			medium:String,
			large:String,
			small:String
		},
		type_2: {
			medium:String,
			large:String,
			small:String
		},
		type_3: {
			medium:String,
			large:String,
			small:String
		},
		type_4: {
			medium:String,
			large:String,
			small:String
		},
		type_5: {
			medium:String,
			large:String,
			small:String
		}
	}
});

module.exports=mongoose.model("Pizza",pizzaSchema);