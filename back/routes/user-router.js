const User = require('../models').User;
const bcrypt = require('bcrypt-nodejs');


module.exports = function (app, passport){
	//register
	// app.post('/signup', function(req, res, next) {
	// 	User.findOne({
	// 	  where: {
	// 			email: req.body.email
	// 		}
	// 	}).then(function(user){
	// 		if(!user){
	// 			User.create({
	// 				email: req.body.email,
 //    			password: bcrypt.hashSync(req.body.password)
	// 			}).then(function(user){
 //        	passport.authenticate("local-signup", {
 //        		failureRedirect:"/signup", successRedirect: "/profile"
 //        	})
 //      })
	// 		} else {
 //      	res.send("user exists")
 //    	};
	// 	});
	// });
 //==========sign-up=============//
 //is not working-- on terminal is a gives: 
//  POST /signup 302 51ms - 29b
// GET /signup 200 30ms - 339b

 app.post("/signup", passport.authenticate('local-signup', {
      successRedirect : '/home',//needs to dererect to registration page 
      failureRedirect : '/signup', 
      failureFlash : true 
  }));

 // //==========log-in==============//
	app.post("/login", passport.authenticate('local-login', {
	  failureRedirect: '/login',
	  successRedirect: '/home',
	}));
  //========user is logedin =====//
  app.get('/', isLoggedIn, function(req, res) {
    res.redirect('/home', {
      user : req.user
    });
  });

	//============ Log-out ===========//
  app.get('/logout', function(req, res) {
    req.logout();
    res.send('logout')
    // res.redirect('/home');
  });

// route middleware to ensure user is logged in //
	function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/');
	};

};
