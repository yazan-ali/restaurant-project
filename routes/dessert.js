const express = require("express");
const router = express.Router();
const Dessert = require("../models/dessertModel");


// dessert index route

router.get("/desserts", (req, res) => {
	Dessert.find({}, function (err, foundedDesserts) {
		if (err) {
			console.log(err);
		} else {
			res.send(foundedDesserts);
		}
	});
});

// dessert create route

router.post("/desserts", (req, res) => {
	var newDessert = {
		dessert_img: req.body.img,
		dessert_name: req.body.name,
		dessert_description: req.body.description,
		dessert_price: req.body.price,
	}
	Dessert.create(newDessert, (err, newDessert) => {
		if (err) {
			console.log(err);
		} else {
			console.log(newDessert);
			res.redirect("/desserts");
		}
	});
});


// dessert update route
router.put("/desserts/:id", (req, res) => {
	var updateDessert = {
		dessert_img: req.body.img,
		dessert_name: req.body.name,
		dessert_description: req.body.description,
		dessert_price: req.body.price,
	}
	Dessert.findByIdAndUpdate(req.params.id, updateDessert, (err, updatedDessert) => {
		if (err) {
			console.log(err);
		} else {
			console.log(updatedDessert);
			res.redirect("/desserts");
		}
	});
});

// dessert destroy route

router.delete("/desserts/:id", (req, res) => {
	Dessert.findByIdAndRemove(req.params.id, (err) => {
		if (err) {
			console.log(err);
		} else {
			res.redirect("/desserts");
		}
	});
});

module.exports = router;