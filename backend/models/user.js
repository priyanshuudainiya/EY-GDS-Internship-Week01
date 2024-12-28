const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Define the schema for the User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Pre-save middleware to hash the password before saving
userSchema.pre("save", async function (next) {
  // Check if the password field is modified
  if (!this.isModified("password")) {
    return next(); // If not modified, skip hashing and call next middleware
  }

  // Generate a salt with 10 rounds
  const salt = await bcrypt.genSalt(10);

  // Hash the password using the generated salt
  this.password = await bcrypt.hash(this.password, salt);

  // Log the hashed password (for demonstration purposes, remove in production)
  console.log("Hashed Password during Registration:", this.password);

  // Call the next middleware
  next();
});

// Create and export the User model
module.exports = mongoose.model("User", userSchema);
