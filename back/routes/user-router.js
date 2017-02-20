const User = require('../models').User;
const bcrypt = require('bcrypt-nodejs');
const Profile = require('../models').Profile;
const Destination = require('../models').Destination;


module.exports = function (app, passport){
	//register
	app.post('/signup', function(req, res, next) {
		User.findOne({
		  where: {
				email: req.body.email
			}
		}).then(function(user){
			if(!user) {
				User.create({
					email: req.body.email,
    				password: bcrypt.hashSync(req.body.password)
				}).then(function(user) {
					user = user.dataValues;
        	passport.authenticate('local', function(err) {
        		if (err) {
        			return next(err)
        		} else {
        			user = Object.assign({}, user);
	      			delete user.password
	      			res.end(JSON.stringify(user));
	      			return true;
	      		}
        	})(req, res, next)
      	})
			} else {
	      res.send("user exists")
	    };
		});
	});

	app.post("/login", function(req, res, next) {
		passport.authenticate('local', function(err) {
			if (err) { return next(err); }

		User.findOne({
			where: {'email': req.body.email },
			include: [{
				model: Profile,
				include: [{
					model: Destination
				}]
			}]
		})
      .then(function(user) {
        // if no user is found, return the message
        user = user.dataValues
        if (!user) {
          res.status(401);
        }
        else if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.status(401).end();
        }
        else {
        	req.logIn(user, function(err) {
			      if (err) { return next(err); }
			      user = Object.assign({}, user);
			      delete user.password
			      res.end(JSON.stringify(user));
			      return true;
	    		})
					// .then(() => {
					// 	return res.redirect('/')
					// })
      	};
      })
      .catch(function(err){
        res.status(500);
      });
    })(req, res, next);
	});

	 //==========gets a user by Id after it logs in ==============//
	app.get('/user/:id', isLoggedIn, function(req, res) {
		User.findById(req.params.id, {
			include: [{model: Profile}]
		})
      .then(function(user) {
      	user = Object.assign({}, user.dataValues);
	    	delete user.password;
      	res.json(user);
      });
	});

  //========loged in?=======//
  app.get('/', isLoggedIn, function(req, res) {
    res.redirect('/', {
      user : req.user
    });
  });

	//============ user logs-out ===========//
  app.get('/logout', function(req, res) {
    req.logout();
    // res.send('logout')
    res.redirect('/login');
  });
  // app.post('/logout', function(req, res){ req.logOut(); res.send(200); }); - See more at: https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs

	// route middleware to ensure user is logged in //
	function isLoggedIn(req, res, next) {
		if (req.isAuthenticated()) {
		  return next();
    }
    res.redirect('/');
	};

};
