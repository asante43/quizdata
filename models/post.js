const mongoose = require('mongoose');

let postSchema = mongoose.Schema(
{
    catagory: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    correct_answer: {
      type: String,
      required: true
    },
    incorrect_answers: {
      type: Array,
      required: true
    }
  });

let Post = module.exports = mongoose.model('Post', postSchema);