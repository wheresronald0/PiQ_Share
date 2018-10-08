const express = require("express");
const router = express.Router();
const userGalleryController = require("../controllers/user_gallery.js");

router.get("/usergallery", userGalleryController.index);
router.get("/usergallery/newpiq", userGalleryController.new);
router.post("/usergallery", userGalleryController.create);
router.get("/usergallery/:id", userGalleryController.show);
router.get("/usergallery/:id/edit", userGalleryController.edit);
router.put("/usergallery/:id", userGalleryController.update);
router.delete("/usergallery/:id", userGalleryController.destroy);

module.exports = router;
