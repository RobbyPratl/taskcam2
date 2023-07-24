const express = require("express");
const historyController = require("../controllers/historyController");
const isAuthenticated = require("../middleware/isAuthenticated");

const router = express.Router();

// Route to get the task history
router.get("/history", isAuthenticated, historyController.getTaskHistory);

module.exports = router;
