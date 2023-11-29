const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LoginSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("users", LoginSchema);

module.exports = collection;
