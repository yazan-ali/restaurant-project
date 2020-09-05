const express = require('express');
const router = express.Router();
const Starter=require("../models/starterModel");

router.get("/starters", (req,res) => {
	Starter.find({}, (err,foundStarter) => {
		if(err){
			console.log(err);
		} else{
			res.send(foundStarter);
		}
	});
});

// create route
router.post("/starters", (req,res) => {
	var newStarter={
	starter_name:req.body.starter_name,
	starter_price:req.body.starter_price
	}
	Starter.create(newStarter, (err,newStarter) => {
		if(err){
			console.log(err);
		} else{
			console.log(newStarter);
			res.redirect("/starters");
		}
	});
});


// update route
router.put("/starters/:id", (req,res) => {
		var updatedStarter={
	starter_name:req.body.starter_name,
	starter_price:req.body.starter_price
	}
	Starter.findByIdAndUpdate(req.params.id,updatedStarter, (err,updatedStarter) => {
		if(err){
			console.log(err);
		} else{
			console.log(updatedStarter);
			res.redirect("/starters");
		}
	});
});

// destroy route

router.delete("/starters/:id", (req,res) => {
	Starter.findByIdAndRemove(req.params.id, (err) =>{
		if(err){
			console.log(err);
		} else{
			res.redirect("/starters");
		}
	});
});

module.exports=router;