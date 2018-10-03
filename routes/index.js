const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.js");

// const photoController = {
//   index: (req, res) => {
//     res.send("We're Routing Again!");
//   }
// };

router.get("/", indexController.index);
// router.get("/new", indexController.new);
// router.post("/", indexController.create);
// router.get("/:id", indexController.show);
// router.get("/:id/edit", indexController.edit);
// router.put("/:id", indexController.update);
// router.destroy("/:id", indexController.destroy);

module.exports = router;
