const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ShorlistedResumeSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  short_resume_id: { type: String, unique: true },
  cand_id: { type: String, unique: false },
  job_id: { type: String, unique: false },
  resume_rank: { type: String, required: false },
  resume_url: { type: String, required: false },
});

const ShorlistedResume = new mongoose.model(
  "ShorlistedResume",
  ShorlistedResumeSchema
);
module.exports = ShorlistedResume;
