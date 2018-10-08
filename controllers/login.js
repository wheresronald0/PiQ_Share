const passport = require("passport");
const User = require("../models/user.js");

module.exports = {
  index: function(req, res) {
    res.render("login");
  },
  create: passport.authenticate("local", {
    successRedirect: "/usergallery",
    failureRedirect: "/login"
  }),
  function(req, res) {}
};
