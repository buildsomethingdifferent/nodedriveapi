var passport = require('passport');
var GoogleDriveStrategy = require('passport-google-drive').Strategy;
const keys = require('./keys');
passport.use(new GoogleDriveStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: keys.google.callBack
  },
  function (accessToken, refreshToken, profile, done) {
    console.log(refreshToken);
    // process.nextTick(function () {
    //   return done(null, profile);
    // });
  }
));
