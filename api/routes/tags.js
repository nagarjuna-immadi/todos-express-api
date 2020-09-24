var express = require('express');
var router = express.Router();

var TagsController = require('../controllers/tags');

router.get("/", TagsController.getAll);

module.exports = router;