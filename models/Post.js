const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  author: mongoose.SchemaTypes.ObjectId,
  date: {
    type: Date,
    default: Date.now(),
  },
});
const Post = mongoose.model("post", postSchema);
module.exports = Post;
