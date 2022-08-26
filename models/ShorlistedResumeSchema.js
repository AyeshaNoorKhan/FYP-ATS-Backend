const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ShorlistedResumeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  short_resume_id: { type: String, unique: false },
  cand_id: { type: String, required: true, unique: false },
  job_id: { type: String, required: true, unique: false },
  cand_positionApplied: { type: String, required: true, unique: false },
  resume_rank: { type: String, required: true },
  resume_matched_job: { type: String, required: true },
  resume_url: { type: String, required: true },
  test_link_status: {
    type: String,
    default: "Not Assigned",
    required: false,
  },
});

const ShorlistedResume = new mongoose.model(
  "ShorlistedResume",
  ShorlistedResumeSchema
);
module.exports = ShorlistedResume;
