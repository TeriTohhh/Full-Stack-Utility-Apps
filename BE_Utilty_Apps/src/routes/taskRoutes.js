const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// Task routes (protected)
router.post("/create", authMiddleware, taskController.createTask);
router.get("/user/:userId", authMiddleware, taskController.getAllTasks);
router.get("/:id", authMiddleware, taskController.getTaskById);
router.put("/update/:id", authMiddleware, taskController.updateTask);
router.delete("/delete/:id", authMiddleware, taskController.deleteTask);

module.exports = router;