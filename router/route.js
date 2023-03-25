const express = require("express");
const router = express.Router();

const { authenticateToken } = require("../middleware/authMiddleware");
const taskController = require("../controllers/taskController");
const userController = require("../controllers/userController");

router.get("/tasks", authenticateToken, taskController.data);
router.get("/tasks/:id", authenticateToken, taskController.index);
router.post("/tasks", authenticateToken, taskController.store);
router.put("/tasks/:id", authenticateToken, taskController.update);
router.delete("/tasks/:id", authenticateToken, taskController.delete);

router.post("/register", userController.register);
router.post("/login", userController.login);

module.exports = router;
