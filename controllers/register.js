const passport = require("passport");
const User = require("../models/user.js");

module.exports = {
  index: function(req, res) {
    res.render("register");
  },
  create: function(req, res) {
    req.body.username;
    req.body.password;
    User.register(
      new User({ username: req.body.username }),
      req.body.password,
      (err, user) => {
        if (err) {
          console.log(err);
          return res.render("register");
        } else {
          passport.authenticate("local")(req, res, () => {
            res.redirect("/usergallery");
          });
        }
      }
    );
  }
};
