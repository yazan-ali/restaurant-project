var express = require("express");
var router = express.Router();
var Pasta = require("../models/pastaModel");

// index route

router.get("/pasta", (req, res) => {
	Pasta.find({}, function (err, foundedPasta) {
		if (err) {
			console.log(err);
		} else {
			res.send(foundedPasta);
		}
	});
});

// create route
router.post("/pasta", (req, res) => {
	var newPasta = {
		pasta_img: req.body.img,
		pasta_name: req.body.name,
		pasta_description: req.body.description,
		pasta_price: req.body.price
	}
	Pasta.create(newPasta, function (err, newPasta) {
		if (err) {
			console.log(err);
		} else {
			console.log(newPasta);
			res.redirect("/pasta");
		}
	});
});


// update route
router.put("/pasta/:id", (req, res) => {
	var updatedPasta = {
		pasta_img: req.body.img,
		pasta_name: req.body.name,
		pasta_description: req.body.description,
		pasta_price: req.body.price
	}
	Pasta.findByIdAndUpdate(req.params.id, updatedPasta, function (err, updatedPasta) {
		if (err) {
			console.log(err);
		} else {
			console.log(updatedPasta);
			res.redirect("/pasta");
		}
	});
});

// destroy route

router.delete("/pasta/:id", (req, res) => {
	Pasta.findByIdAndDelete(req.params.id, function (err) {
		if (err) {
			console.log(err);
		} else {
			res.redirect("/pasta");
		}
	})
});

module.exports = router;