const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ShorlistResumeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  short_resume_id: { type: String, unique: false },
  cand_id: { type: String, required: true, unique: false },
  job_id: { type: String, required: true, unique: false },
  cand_positionApplied: { type: String, required: true, unique: false },
  resume_rank: { type: String, required: true, unique: false },
  resume_matched_job: { type: String, required: true, unique: false },
  resume_url: { type: String, required: true, unique: false },
  test_link_status: {
    type: String,
    default: "Not Assigned",
    required: false,
    unique: false,
  },
});

const ShorlistResume = new mongoose.model(
  "ShorlistResume",
  ShorlistResumeSchema
);
module.exports = ShorlistResume;
