const express = require("express");
const router = express.Router();
const newPiqController = require("../controllers/new-piq.js");

router.get("/newpiq", newPiqController.index);

module.exports = router;
