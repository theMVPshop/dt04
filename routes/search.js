const express = require("express");
const router = express.Router();
const searchController = require("../controller/searchController");

router.get("/:searchParams", searchController.fetchResults);

module.exports = router;
