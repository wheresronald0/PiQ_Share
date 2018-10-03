const express = require("express");
const router = express.Router();
const photoController = require("../controllers/photo.js");

// const photoController = {
//   index: (req, res) => {
//     res.send("We're Routing Again!");
//   }
// };

router.get("/", photoController.index);
// router.get("/new", photoController.new);
// router.post("/", photoController.create);
// router.get("/:id", photoController.show);
// router.get("/:id/edit", photoController.edit);
// router.put("/:id", photoController.update);
// router.destroy("/:id", photoController.destroy);

module.exports = router;
