const jwt = require("jsonwebtoken");

// Middleware function to verify JWT
const verifyToken = (req, res, next) => {
  // Get the token from the Authorization header and remove 'Bearer ' prefix
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // Check if token is not present
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify the token using the secret key
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the decoded user information to the request object
    req.user = decoded;
    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Handle invalid token errors
    res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = { verifyToken };
