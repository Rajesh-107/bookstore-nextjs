// import mongoose from "mongoose";
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imagesURL: {
    type: String,
    required: true,
  },
  featured: {
    type: Boolean,
  },
});

module.exports = mongoose.models.Book || mongoose.model("Book", bookSchema);
//
