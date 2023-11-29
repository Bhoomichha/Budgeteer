const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SavingSchema = new Schema({
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  deposit: {
    type: Number,
    required: false,
  },
  remaining: {
    type: Number,
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Savings", SavingSchema);
