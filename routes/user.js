const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.js");

// const photoController = {
//   index: (req, res) => {
//     res.send("We're Routing Again!");
//   }
// };

router.get("/user", userController.index);
// router.get("/new", userController.new);
// router.post("/", userController.create);
// router.get("/:id", userController.show);
// router.get("/:id/edit", userController.edit);
// router.put("/:id", userController.update);
// router.destroy("/:id", userController.destroy);

module.exports = router;
