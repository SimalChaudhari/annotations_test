const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  Number: { type: Number },
  Annotation1: { type: String },
  Annotation2: { type: String },
  Annotation3: { type: String },
  Annotation4: { type: String },
  Annotation5: { type: String },
});

module.exports = mongoose.model("question", questionSchema);
