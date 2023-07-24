/*const express = require("express");
const tasksController = require("../controllers/tasksController");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = express.Router();

// Route to create a new task
router.post("/tasks", isAuthenticated, tasksController.createTask());

// Route to delete a task
router.delete("/tasks/:id", isAuthenticated, tasksController.deleteTask());

// Route to get all tasks
router.get("/tasks", isAuthenticated, tasksController.getTasks());

// Route to get completed tasks
router.get(
  "/completed-tasks",
  isAuthenticated,
  tasksController.getCompletedTasks
);

router.post("/tasks", isAuthenticated, (req, res) => {
  tasksController.createTask(req, res);
});

// Route to delete a task
router.delete("/tasks/:id", isAuthenticated, (req, res) => {
  tasksController.deleteTask(req, res);
});

module.exports = router;

*/
const express = require("express");
const tasksController = require("../controllers/tasksController");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = express.Router();

// Route to create a new task
router.post("/", isAuthenticated, tasksController.createTask);

// Route to get all tasks
router.get("/", tasksController.getTasks);

// Route to delete a task
router.delete("/:id", isAuthenticated, tasksController.deleteTask);

module.exports = router;
