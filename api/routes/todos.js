var express = require('express');
var router = express.Router();

var TodosController = require('../controllers/todos');

router.get("/", TodosController.getAll);
router.get("/:todoId", TodosController.get);
router.post("/", TodosController.save);
router.put("/", TodosController.update);
router.delete("/:todoId", TodosController.delete);

module.exports = router;