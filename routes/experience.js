const express = require("express");
const router = express.Router();
const experienceController = require("../controller/experienceController");

router.post("/:expParams", experienceController.addExperience);
router.get("/:expParams", experienceController.viewExperience);

module.exports = router;
