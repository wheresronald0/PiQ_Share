const express = require("express");
const router = express.Router();
const userGalleryController = require("../controllers/user_gallery.js");

router.get("/usergallery", userGalleryController.index);
router.post("/usergallery", userGalleryController.create);

module.exports = router;
