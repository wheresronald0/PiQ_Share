const express = require("express");
const router = express.Router();
const passport = require("passport");
const registerController = require("../controllers/register.js");
const User = require("../models/user.js");

router.get("/register", registerController.index);
router.post("/register", registerController.create);

// router.get("/register", function(req, res) {
//   res.render("register");
// });

// router.post("/register", (req, res) => {
//   req.body.username;
//   req.body.password;
//   User.register(
//     new User({ username: req.body.username }),
//     req.body.password,
//     (err, user) => {
//       if (err) {
//         console.log("error dammit!");
//         return res.render("register");
//       } else {
//         passport.authenticate("local")(req, res, () => {
//           res.redirect("/usergallery");
//         });
//       }
//     }
//   );
// });

module.exports = router;
