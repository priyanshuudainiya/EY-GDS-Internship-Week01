const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
// require("dotenv").config();

const router = express.Router();

// POST: Register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user with plain password (hashed in the model)
    const user = new User({ name, email, password });
    await user.save(); // Hashing is handled by the pre-save hook in the model

    // Generate a JSON Web Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with the token and user information
    res.status(201).json({ username: user.name, token: token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// POST: Sign In
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Email or Password" });
    }

    // Generate a JSON Web Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Respond with the token and user information
    res.status(200).json({ username: user.name, token: token });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
