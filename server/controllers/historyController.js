const Task = require("../models/Task");

const historyController = {
  getTaskHistory: async (req, res) => {
    try {
      const userId = req.user._id; // Assuming you have implemented authentication and req.user contains the authenticated user

      // Retrieve all completed tasks for the user
      const completedTasks = await Task.find({ user: userId, completed: true });

      res.status(200).json({ history: completedTasks });
    } catch (error) {
      res.status(500).json({ message: "An error occurred" });
    }
  },
};

module.exports = historyController;
