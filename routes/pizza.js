const express = require('express');
const router = express.Router();
const Pizza = require("../models/pizzaModel");
var middleware = require("../middleware/middleware");

// index route

router.get('/pizza', (req, res) => {
    Pizza.find({}, (err, foundedPizza) => {
        if (err) {
            console.log(err);
        } else {
            res.send(foundedPizza);
        }
    });
});

// show route
router.get("/pizza/:id", (req, res) => {
    Pizza.findById(req.params.id, (err, pizza) => {
        if (err) {
            console.log(err);
        } else {
            console.log(pizza);
        }
    });
});

// create route
router.post("/pizza", (req, res) => {
    const newPizza = {
        pizza_type: req.body.type,
        pizza_name: req.body.name,
        pizza_img: req.body.img,
        pizza_description: req.body.description,
        pizza_size: {
            size_1: req.body.size_1,
            size_2: req.body.size_2,
            size_3: req.body.size_3,
        },
        dough_type: {
            type_1: req.body.type_1,
            type_2: req.body.type_2,
            type_3: req.body.type_3,
            type_4: req.body.type_4,
            type_5: req.body.type_5,
            type_6: req.body.type_6,
        },
        pizza_price: {
            type_1: {
                medium: req.body.type_1_medium_size,
                large: req.body.type_1_large_size,
                small: req.body.type_1_small_size
            },
            type_2: {
                medium: req.body.type_2_medium_size,
                large: req.body.type_2_large_size,
                small: req.body.type_2_small_size
            },
            type_3: {
                medium: req.body.type_3_medium_size,
                large: req.body.type_3_large_size,
                small: req.body.type_3_small_size
            },
            type_4: {
                medium: req.body.type_4_medium_size,
                large: req.body.type_4_large_size,
                small: req.body.type_4_small_size
            },
            type_5: {
                medium: req.body.type_5_medium_size,
                large: req.body.type_5_large_size,
                small: req.body.type_5_small_size
            }
        }
    }
    Pizza.create(newPizza, (err, newPizza) => {
        if (err) {
            console.log(err);
        } else {
            console.log("pizza add: " + newPizza);
        }
    });
});

// update route
router.put("/pizza/:id", (req, res) => {
    var updatedPizza = {
        pizza_type: req.body.type,
        pizza_name: req.body.name,
        pizza_img: req.body.img,
        pizza_description: req.body.description,
        pizza_size: {
            size_1: req.body.size_1,
            size_2: req.body.size_2,
            size_3: req.body.size_3,
        },
        dough_type: {
            type_1: req.body.type_1,
            type_2: req.body.type_2,
            type_3: req.body.type_3,
            type_4: req.body.type_4,
            type_5: req.body.type_5,
            type_6: req.body.type_6,
        },
        pizza_price: {
            type_1: {
                medium: req.body.type_1_medium_size,
                large: req.body.type_1_large_size,
                small: req.body.type_1_small_size
            },
            type_2: {
                medium: req.body.type_2_medium_size,
                large: req.body.type_2_large_size,
                small: req.body.type_2_small_size
            },
            type_3: {
                medium: req.body.type_3_medium_size,
                large: req.body.type_3_large_size,
                small: req.body.type_3_small_size
            },
            type_4: {
                medium: req.body.type_4_medium_size,
                large: req.body.type_4_large_size,
                small: req.body.type_4_small_size
            },
            type_5: {
                medium: req.body.type_5_medium_size,
                large: req.body.type_5_large_size,
                small: req.body.type_5_small_size
            }
        }
    }
    Pizza.findByIdAndUpdate(req.params.id, updatedPizza, (err, Pizza) => {
        if (err) {
            console.log(err);
        } else {
            console.log(Pizza);
            // res.redirect("/pizza");
        }
    });
});


// destroy route
router.delete("/pizza/:id", (req, res) => {
    Pizza.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("pizza deleted");
        }
    })
});

// beef index route

router.get("/pizza/type/beef", (req, res) => {
    Pizza.find({ pizza_type: "beef" }, (err, beefPizza) => {
        if (err) {
            console.log(err);
        } else {
            res.send(beefPizza);
        }
    });
});

// chicken index route

router.get("/pizza/type/chicken", (req, res) => {
    Pizza.find({ pizza_type: "chicken" }, (err, chickenPizza) => {
        if (err) {
            console.log(err);
        } else {
            res.send(chickenPizza);
        }
    });
});

// vegetarian index route

router.get("/pizza/type/vegetarian", (req, res) => {
    Pizza.find({ pizza_type: "vegetarian" }, (err, vegetarianPizza) => {
        if (err) {
            console.log(err);
        } else {
            res.send(vegetarianPizza);
        }
    });
});


module.exports = router;