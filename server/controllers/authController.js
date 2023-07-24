const User = require("../models/User");

const authController = {
  register: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if user with the provided email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create a new user
      const newUser = new User({ email, password });
      await newUser.save();

      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      res.status(500).json({ message: "An error occurred" });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      // Check if user exists and verify password
      const user = await User.findOne({ email });
      if (!user || !user.verifyPassword(password)) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, secretKey, {
        expiresIn: "1h", // Adjust the expiration time as per your requirements
      });

      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: "An error occurred" });
    }
  },

  logout: (req, res) => {
    req.logout();
    res.status(200).json({ message: "Logout successful" });
  },

  getUser: (req, res) => {
    if (req.user) {
      res.status(200).json({ user: req.user });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  },
};

module.exports = authController;
