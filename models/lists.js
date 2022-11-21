const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AllLevelSchema = new Schema({
  number: { type: Number },
  name: { type: String },
});

module.exports = mongoose.model("list", AllLevelSchema);

