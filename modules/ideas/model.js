const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ideasModel = new Schema({
  userID: { type: String, unique: true, required: true },
  ideaID: { type: String, unique: true, required: true },
  images: { type: Array, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
},
{
  timestamps: true
});

module.exports = mongoose.model("idea", ideasModel);
