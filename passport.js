const LocalStrategy   = require('passport-local').Strategy;
const User = require('./back/models').User;

module.exports = function (passport) {

	passport.serializeUser(function(user, done) {
  	done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id)
		.then(function (user) {
	    done(null, user);
	  })
		.catch(function(err) {
			throw(err)
		})
	});


  //=====sign-up & log-in======
  passport.use('local', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true,
		session: false
	},
  	function(req, username, password, done) {
			User.findOne({ email: username })
			.then(function(user) {
				if(!user) {
					return done(null, false, { message: 'Incorrect email.'});
				}
				// if(!user.validPassword(password)) {
				// 	return done(null, false, {message: 'Incorrect password'});
				// }
				return done(null, user);
			})
			.catch(function(err) {
					return done(err);
			})
  	}
  ));
}
