const express = require("express");
const router = express.Router();
const Deal = require("../models/dealModel");

// index route

router.get("/deals", (req, res) => {
	Deal.find({}, (err, foundDeal) => {
		if (err) {
			console.log(err);
		} else {
			console.log(foundDeal);
			res.send(foundDeal);
		}
	});
});


// create route
router.post("/deals", (req, res) => {
	var newDeal = {
		deal_img: req.body.img,
		deal_name: req.body.name,
		deal_description: req.body.description,
		deal_price: req.body.price
	}
	Deal.create(newDeal, (err, newDeal) => {
		if (err) {
			console.log(err);
		} else {
			console.log(newDeal);
		}
	});
});

// update route
router.put("/deals/:id", (req, res) => {
	var updatedDeal = {
		deal_img: req.body.img,
		deal_name: req.body.name,
		deal_description: req.body.description,
		deal_price: req.body.price
	}
	Deal.findByIdAndUpdate(req.params.id, updatedDeal, (err, updatedDeal) => {
		if (err) {
			console.log(err);
		} else {
			console.log(updatedDeal);
		}
	});
});

// destroy route

router.delete("/deal/:id", (req, res) => {
	Deal.findByIdAndRemove(req.params.id, (err) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect("/deals");
		}
	})
});

module.exports = router;