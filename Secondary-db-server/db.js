const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/questions');
const { Schema } = mongoose;

const questions = new Schema({
  required: ["product_id", "question_id", "body", "date_written",
   "asker_name", "asker_email", "reported", "helpful"],
   properties: {
    id: Number,
    product_id: Number,
    body: {
      type: String,
      maxLength: 1000
    },
    question_date: String,
    asker_name: {
      type: String,
      maxLength: 60
    },
    asker_email: {
      type: String,
      maxLength: 60
    },
    reported: Boolean,
    helpful: Number,
  }
})

const answers = new Schema({
  required: ["id", "question_id", "answer_id", "body", "date_written",
  "answerer_name", "answerer_email", "reported", "helpful"],
  properties: {
    id: Number,
    question_id: Number,
    body: {
      type: String,
      maxLength: 1000
    },
    date_written: String,
    answerer_name: {
      type: String,
      maxLength: 60
    },
    answerer_email: {
      type: String,
      maxLength: 60
    },
    reported: Boolean,
    helpful: Number,
  }
})

const answer_photos = new Schema({
  required: ["id", "answer_id", "url"],
  properties: {
    id: Number,
    answer_id: Number,
    url: {
      type: String,
      maxLength: 1000
    }
  }
})

