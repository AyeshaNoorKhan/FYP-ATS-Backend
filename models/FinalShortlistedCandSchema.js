const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const FinalShortlistedCandidateSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  shortlisted_cand_Id: { type: String, unique: true, required: true },
  cand_id: { type: String, required: true },
  job_id: { type: String, required: true },
  total_score: { type: Number, required: true },
  resume_rank: { type: String, required: true },
  final_interview_link_status: {
    type: String,
    default: "Not Invited",
    required: false,
  },
});

const FinalShortlistedCandidate = new mongoose.model(
  "FinalShortlistedCandidate",
  FinalShortlistedCandidateSchema
);
module.exports = FinalShortlistedCandidate;
