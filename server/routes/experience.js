const express = require("express");
const router = express.Router();
const experienceController = require("../controller/experienceController");

router.post("/", experienceController.addExperience);
router.get("/", experienceController.viewExperience);

module.exports = router;
