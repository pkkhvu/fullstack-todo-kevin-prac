const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        require: true,
      },
      cloudinaryId: {
        type: String,
        require: true,
      },
      caption: {
        type: String,
        required: true,
      },
      likes: {
        type: Number,
        required: true,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

const PostModel = mongoose.model('postSchema', postSchema);
module.exports = {PostModel};