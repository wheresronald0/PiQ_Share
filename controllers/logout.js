const passport = require("passport");

module.exports = {
  index: function(req, res) {
    req.logout();
    res.redirect("/");
  }
};
