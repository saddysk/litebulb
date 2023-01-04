const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discussionsModel = new Schema({
  userID: { type: String, required: true },
  ideaID: { type: String, required: true },
  comment: { type: String },
  replies: { type: Array }
  // replies: [
  //   {
  //     userID: { type: String },
  //     reply: { type: String },
  //   }
  // ],
},
{
  timestamps: true
});

module.exports = mongoose.model("discussion", discussionsModel);
