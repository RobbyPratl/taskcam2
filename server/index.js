const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
const session = require("express-session");
const cors = require("cors");

// Import server information from db.js
const { mongoURI } = require("./db");

// Import routes
const authRoutes = require("./routes/auth");
const tasksRoutes = require("./routes/tasks");
const historyRoutes = require("./routes/history");

// Initialize Express app
const app = express();

// Configure body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Import and configure passport strategy (e.g., local strategy)
const passportConfig = require("./config/passport");
passportConfig(passport);

// Define routes
app.use("/auth", authRoutes);
app.use("/tasks", tasksRoutes);
app.use("/history", historyRoutes);

// Start the server
const port = process.env.PORT || 3333;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
