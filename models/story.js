const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  }
);

const StorySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: {
    type: String,
    required: true,
  },
  emotion: {
    type: String,
    required: true,
  },
  liked: {
    type: Boolean,
    default: false,
  },
  publishedDate: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  comments: [commentSchema],

});


const Story = mongoose.model('Story', StorySchema);
module.exports = Story;
