const express = require('express');
const router = express.Router();
const passport = require("passport");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

router.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) throw err;
		if (!user) res.send("No User Exists");
		else {
			req.logIn(user, (err) => {
				if (err) throw err;
				res.send("Successfully Authenticated");
				console.log(req.user);
			});
		}
	})(req, res, next);
});
router.post("/register", (req, res) => {
	User.findOne({ username: req.body.username }, async (err, doc) => {
		if (err) throw err;
		if (doc) res.send("User Already Exists");
		if (!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10);

			const newUser = new User({
				username: req.body.username,
				password: hashedPassword,
				isAdmin: req.body.isAdmin,
				user_name: req.body.user_name
			});
			await newUser.save();
			res.send("User Created");
		}
	});
});
router.get("/user", (req, res) => {
	res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

//   router.get("/logout", (req,res) => {
// 	req.logout();
// });

router.get('/logout', function (req, res) {
	req.logout();
	res.clearCookie('duoshuo_token');
	req.session.destroy();
	res.redirect('/');
});

module.exports = router;