const express = require('express');
const router = express.Router();
const searchController = require('../controller/searchController')


router.get('/', searchController.fetchResults)

module.exports = router;