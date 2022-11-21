const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const childSchema = new Schema({
  name: { type: String },
  parent_id: { type: Schema.Types.ObjectId, ref: 'list' }
});

module.exports = mongoose.model("child", childSchema);

