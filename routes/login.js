const express = require("express");
const router = express.Router();
const passport = require("passport");
const loginController = require("../controllers/login.js");
const User = require("../models/user.js");

router.get("/login", loginController.index);
router.post("/login", loginController.create);

module.exports = router;
