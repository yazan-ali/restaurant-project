var middlewareObj = {};


middlewareObj.isAdmin=function(req,res,next){
	if(req.isAuthenticated()){
		User.find({}, function(err, foundUser){
		if(err || !foundUser){
			// req.flash("error","User not found");
			res.redirect("back");
		} else{
			if(req.user.isAdmin===true){
               next();
			} else{
				// req.flash("error","You don't have permission to do that");
				res.redirect("back");
			}
		}
    });
	}
		else{
	    //    req.flash("error","You need to be logged in to do that");
           res.redirect("back");
	}
}

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    // req.flash("error", "You need to be logged in to do that");
    res.redirect("/login");
}

module.exports = middlewareObj;