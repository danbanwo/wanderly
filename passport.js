/*
included a function for sign up, 'local' instead of local-login
*/

const LocalStrategy   = require('passport-local').Strategy;
const User = require('./back/models').User;
const bcrypt = require('bcrypt-nodejs');


module.exports = function (passport) {
	
	passport.serializeUser(function(user, done) {
  	done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
	  User.findById(id).then(function (user) {
	    done(null, user);
	  });
	});
     // LOCAL SIGNUP =========
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true 
  },
  function(req, email, password, done) {
    if (email) {
      email = email.toLowerCase(); 
    }
    // asynchronous
    process.nextTick(function() {
      // if the user is NOT there:
      if (!req.User) {
        User.findOne({'email': req.body.email})
          .then(function(user){
            if (user) {
              return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {
             // creates user
             User.create({
               'email': email,
               'password': User.generateHash(password)
             })
             .then(function(user){
               return done(null, user)
             })
             .catch(function(err) {
               return done(err)
             })
            }
          })
          .catch(function(err){
            return done(err)
          })
      }
    })
  }));
  
  //===========loging-in======
  passport.use('local', new LocalStrategy({
    passReqToCallback : true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
  }, 
  function(req, email, password, done) {
    process.nextTick(function() {
      return done(null, req.user);
    });
  }
  ));
};

