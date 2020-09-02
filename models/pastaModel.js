const mongoose=require("mongoose");

const pastaSchema =new mongoose.Schema({
	pasta_img:String,
	pasta_name:String,
	pasta_description:String,
	pasta_price:String
});

module.exports=mongoose.model("Pasta",pastaSchema);