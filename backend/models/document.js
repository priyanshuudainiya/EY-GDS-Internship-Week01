const mongoose = require("mongoose");

// Define the schema for the Document
const documentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  // collaborators: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Document model
module.exports = mongoose.model("Document", documentSchema);
