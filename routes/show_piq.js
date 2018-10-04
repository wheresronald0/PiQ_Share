const express = require("express");
const router = express.Router();
const piqController = require("../controllers/show_piq.js");

router.get("/user_gallery/:id", piqController.index); //needs updating - sho route??

module.exports = router;
