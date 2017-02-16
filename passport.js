const LocalStrategy   = require('passport-local').Strategy;
const User = require('./back/models').User;

module.exports = function (passport) {
	
	passport.serializeUser(function(user, done) {
  	done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id).then(function (user) {
	    done(null, user);
	  });
	});
  //=====sign-up & log-in======
  passport.use('local', new LocalStrategy({
    // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    passReqToCallback : true 
  }, 
  function(req, email, password, done) {
    process.nextTick(function() {
      return done(null, req.user);
    });
  }
  ));

};

