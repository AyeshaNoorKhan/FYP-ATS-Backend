const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ShorlistedResumeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  short_resume_id: { type: String, unique: true },
  cand_id: { type: String, unique: true },
  job_id: { type: String, unique: true },
  cand_positionApplied: { type: String, unique: true },
  resume_rank: { type: String, required: true },
  resume_matched_job: { type: String, required: true },
  resume_url: { type: String, required: true },
  test_link_status: {
    type: String,
    default: "Not Assigned Test",
    required: false,
  },
});

const ShorlistedResume = new mongoose.model(
  "ShorlistedResume",
  ShorlistedResumeSchema
);
module.exports = ShorlistedResume;
