const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');

// index route
router.get('/cart', (req, res) => {
    Cart.find({}, (err, foundedItem) => {
        if (err) {
            console.log(err);
        } else {
            res.send(foundedItem);
        }
    });
});

// index route by id
router.get('/cart/:id', (req, res) => {
    Cart.find({ user_id: req.params.id }, (err, foundedItem) => {
        if (err) {
            console.log(err);
        } else {
            res.send(foundedItem);
        }
    });
});

// create route
router.post('/cart', (req, res) => {
    const newItems = {
        cartItem: req.body,
        user_id: req.body.user_id
    };
    Cart.create(newItems, (err, newItem) => {
        if (err) {
            console.log(err);
        } else {
            console.log(newItem);
        }
    });
});


// destroy route
router.delete("/cart/:id", (req, res) => {
    Cart.findByIdAndDelete(req.params.id, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("order deleted");
        }
    })
});

module.exports = router;