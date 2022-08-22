const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const CandInfoSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  cand_id: { type: String, unique: true },
  job_id: { type: String, required: true },
  cand_name: { type: String, required: true },
  cand_email: { type: String, required: true },
  cand_contact: { type: String, required: true },
  cand_city: { type: String, required: true },
  cand_country: { type: String, required: true },
  cand_highedu: { type: String, required: true },
  cand_workexp: { type: Number, required: true },
  cand_gender: { type: String, required: true },
  cand_shiftspref: { type: String, required: true },
  cand_hecverif: { type: String, required: true },
  cand_positionApplied: { type: String, required: true },
  cand_ResumeURL: { type: String, required: true },
  // cand_Resume:{type:String,required:true,}
  cand_Resume: { type: Buffer },
});

const CandInfo = new mongoose.model("CandInfo", CandInfoSchema);
module.exports = CandInfo;

// {
//     "cand_id":"C-461",
//     "cand_name":"Noor Khan",
//     "cand_email":"noor@gmail.com",
//     "cand_contact":"0332-8224649",
//     "cand_dob":"2000-11-1",
//     "cand_city":"Karachi",
//     "cand_country":"Pakistan",
//     "cand_highedu":"Bachelors",
//     "cand_workexp":4,
//     "cand_gender":"Male",
//     "cand_shiftspref":"Night Only",
//     "cand_hecverif":"Yes"
// }
