// importing packages
const express = require("express");
const { verifyToken } = require("./middleware/auth"); // Adjust the path as necessary
const http = require("http");
const dotenv = require("dotenv");
const cors = require("cors");

//importing db config
const connectDB = require("./config/db");

//importing routes
const authRoutes = require("./routes/auth");
const documentRoutes = require("./routes/documents");

dotenv.config();
// Connect to the database
connectDB();

const app = express();
const server = http.createServer(app);

// Configure CORS for HTTP requests
//CORS - Cross Origin Resource Sharing

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  })
);

// Protected route example
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "This is a protected route", user: req.user });
});

// Middleware and routes
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/documents", documentRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
