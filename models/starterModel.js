const mongoose=require("mongoose");

const starterSchema = new mongoose.Schema({
        starter_name: String,
        starter_price: String
});

module.exports=mongoose.model("Startre",starterSchema);