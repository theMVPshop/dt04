var express = require("express");
var router = express.Router();
const userController = require("../controller/usersController");

router.post("/", userController.user_post);
router.post("/signup", userController.signup_post);
router.get("/login", userController.login_get);
router.post("/login", userController.login_post);
router.post("/saved/", userController.favorite_update);
router.get("/saved/:userId", userController.favorite_get);
router.delete("/saved/", userController.favorite_delete);

module.exports = router;
