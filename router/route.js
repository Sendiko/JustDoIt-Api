const express = require("express");
const router = express.Router();

const taskController = require('../controllers/taskController')

router.get("/tasks", taskController.data);
router.get("/tasks/:id", taskController.index);
router.post("/tasks", taskController.store);
router.put("/tasks/:id", taskController.update);
router.delete("/tasks/:id", taskController.delete);

module.exports = router
