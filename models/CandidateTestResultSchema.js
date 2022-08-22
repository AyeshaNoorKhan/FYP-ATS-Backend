const mongoose = require("mongoose");
require("dotenv").config();

const CandTestResultSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  cand_score_id: { type: String, unique: true },
  cand_id: { type: String, required: true },
  job_id: { type: String, required: true },
  oop_score: { type: Number, required: true },
  ds_score: { type: Number, required: true },
  gk_score: { type: Number, required: true },
  other_score: { type: Number, required: true },
  total_score: { type: Number, required: true },
});

const CandTestResult = new mongoose.model(
  "CandTestResult",
  CandTestResultSchema
);
module.exports = CandTestResult;
