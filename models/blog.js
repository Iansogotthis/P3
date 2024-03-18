const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now }
  }
);

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    content: { type: String, required: true },
    comments: [commentSchema],
    likes: { type: Number, default: 0 },
    password: { type: String },
    photoUrl: { type: String }, // string from aws!
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Blog', blogSchema);