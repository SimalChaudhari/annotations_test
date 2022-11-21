const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const subChildSchema = new Schema({
  name: { type: String },
  child_id: { type: Schema.Types.ObjectId, ref: 'child' }


});

module.exports = mongoose.model("subchild", subChildSchema);

