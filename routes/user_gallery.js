const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user.js");
const loginController = require("../controllers/login.js");
const userGalleryController = require("../controllers/user_gallery.js");

router.get("/usergallery", isLoggedIn, userGalleryController.index);
router.get("/usergallery/newpiq", userGalleryController.new);
router.post("/usergallery", userGalleryController.create);
router.get("/usergallery/:id", userGalleryController.show);
router.get("/usergallery/:id/edit", userGalleryController.edit);
router.put("/usergallery/:id", userGalleryController.update);
router.delete("/usergallery/:id", userGalleryController.destroy);

function isLoggedIn(req, res, next) {
  //middleware function with builtin func from passport
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

module.exports = router;
