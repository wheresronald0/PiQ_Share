const express = require("express");
const router = express.Router();
const userGalleryController = require("../controllers/user_gallery.js");

// const photoController = {
//   index: (req, res) => {
//     res.send("We're Routing Again!");
//   }
// };

router.get("/usergallery", userGalleryController.index);

module.exports = router;
