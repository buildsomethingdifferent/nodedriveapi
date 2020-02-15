const express = require("express");
const passport = require('passport');
const Router = express.Router();
const mysqlConnection = require("../connection");
const scope = ['https://www.googleapis.com/auth/drive.metadata.readonly'];

Router.get('/login',
passport.authenticate('google-drive',{
    scope: scope
}));
Router.get('/google-drive/callback', 
passport.authenticate('google-drive', { failureRedirect: '/login' }),
function(req, res) {
});

module.exports = Router;