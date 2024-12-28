const mongoose = require("mongoose");

// Asynchronous function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string
    await mongoose.connect("mongodb://localhost:27017/realcollabDB", {
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new topology engine
    });
    console.log("MongoDB connected");
  } catch (error) {
    // Handle any connection errors
    console.error("MongoDB connection error:", error.message);
  }
};

// Export the connection function
module.exports = connectDB;
