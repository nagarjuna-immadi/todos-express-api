var express = require('express');
var router = express.Router();

var CategoriesController = require('../controllers/categories');

router.get("/", CategoriesController.getAll);

module.exports = router;