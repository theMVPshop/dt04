var express = require("express");
var router = express.Router();
const userController = require("../controller/usersController");

router.get("/signup", userController.signup_get);
router.post("/signup", userController.signup_post);
router.get("/login", userController.login_get);
router.post("/login", userController.login_post);
router.put("/login", userController.login_put)

module.exports = router;
