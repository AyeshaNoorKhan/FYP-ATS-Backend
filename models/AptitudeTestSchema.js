const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const aptTestSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  aptTest_id: { type: String, unique: true },
  id: { type: String, unique: true },
  aptTest_category: { type: String, required: true },
  aptTest_question: { type: String, required: true },
  aptTest_optionA: { type: String, required: true },
  aptTest_optionB: { type: String, required: true },
  aptTest_optionC: { type: String, required: false },
  aptTest_optionD: { type: String, required: false },
  aptTest_answer: { type: String, required: true },
});

const AptTest = new mongoose.model("aptTestDetail", aptTestSchema);
module.exports = AptTest;
