const express = require("express");
const router = express.Router();
const passport = require("passport");
const logoutController = require("../controllers/logout.js");

router.get("/logout", logoutController.index);

module.exports = router;
