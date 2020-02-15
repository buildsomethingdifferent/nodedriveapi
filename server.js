const express = require("express");
var passport = require('passport');
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
passport.serializeUser( function (user, done) {
	done(null, user);
});

passport.deserializeUser( function (obj, done) {
	done(null, obj);
});
const passportSetup = require("./config/passport-setup");

var app = express();

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use("/auth", routes);

app.listen(3000);