var express = require('express');
var router = express.Router();
const authController = require('../controller/experienceController')


router.post('/experience', authController.addExperience)
router.get('/experience', authController.viewExperience)


module.exports = router;
