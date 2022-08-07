const mongoose = require("mongoose");
require("dotenv").config();

const CandTestResultSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  cand_score_id: { type: String, unique: true },
  cand_id: { type: String, required: false },
  job_id: { type: String, required: false },
  oop_score: { type: Number, required: false },
  ds_score: { type: Number, required: false },
  gk_score: { type: Number, required: false },
  other_score: { type: Number, required: false },
  total_score: { type: Number, required: false },
});

const CandTestResult = new mongoose.model(
  "CandTestResult",
  CandTestResultSchema
);
module.exports = CandTestResult;
