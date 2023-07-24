// tasksController.js
const Task = require("../models/Task");

const tasksController = {
  createTask: async (req, res) => {
    try {
      const { title } = req.body;
      const userId = req.user._id; // Assuming you have implemented authentication and req.user contains the authenticated user

      const newTask = new Task({ title, user: userId });
      await newTask.save();

      res
        .status(201)
        .json({ message: "Task created successfully", task: newTask });
    } catch (error) {
      res.status(500).json({ message: "An error occurred" });
    }
  },
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find();

      res.status(200).json({ tasks });
    } catch (error) {
      res.status(500).json({ message: "An error occurred" });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const taskId = req.params.id;
      const userId = req.user._id; // Assuming you have implemented authentication and req.user contains the authenticated user

      // Check if the task belongs to the authenticated user
      const task = await Task.findOne({ _id: taskId, user: userId });
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }

      await task.remove();

      res.status(200).json({ message: "Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "An error occurred" });
    }
  },
};

module.exports = tasksController;
