const express = require("express");
const router = express.Router();
const newPiqController = require("../controllers/new_piq.js");

router.get("/usergallery/newpiq", newPiqController.new);
// router.get("/new")

//I think this route goes on usergallery route
// router.post("/usergallery", newPiqController.create);

module.exports = router;
