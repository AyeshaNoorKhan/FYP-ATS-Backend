const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const jobSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  job_id: { type: String, unique: true },
  id: { type: String, unique: true },
  job_code: { type: String, required: true, unique: true },
  job_category: { type: String, required: true },
  job_title: { type: String, required: true },
  job_location: { type: String, required: true },
  job_positions: { type: String, required: true },
  job_description: { type: String, required: false },
  // job_descriptionB:  {type:String,required:false,},
  // job_descriptionC:  {type:String,required:false,},
  // job_descriptionD:  {type:String,required:false,},
  // job_descriptionE:  {type:String,required:false,},
  // job_descriptionF:  {type:String,required:false,},
  // job_descriptionG:  {type:String,required:false,},
  // job_descriptionH:  {type:String,required:false,},
  // job_qualificationA:{type:String,required:false ,},
  // job_qualificationB:{type:String,required:false,},
  // job_qualificationC:{type:String,required:false,},
  // job_qualificationD:{type:String,required:false,},
  job_qualification: { type: String, required: false },
  job_experience: { type: String, required: false },
});

const JobDetail = new mongoose.model("JobDetail", jobSchema);
module.exports = JobDetail;

// {
//   "job_id":"5466jd",
//   "job_code":"JD-569",
//   "job_category":"Application Consultant’,",
//   "job_title":"Senior Application Consultant’",
//   "job_location":"Karachi",
//   "job_positions":3,
//   "job_descriptionA":"ISO8583 messages formats, ATM/CCDM controller, POS acquiring, EMV & Contactless card issuing, H2H interfaces with core banking and other digital channels.",
//   "job_descriptionB":"Knowledge of integration protocols and practices for IBFT, UBPS, 1BILL, Processing with VISA, MasterCard and UPI payment schemes, Settlement and reconciliation",
//   "job_descriptionC":"The candidates will lead multiple implementation teams across customers and will be responsible for client implementations and delivery.",
//   "job_qualificationA":"Should possess strong collaboration, leadership and conflict-resolution skills.",
//   "job_qualificationB":"Must have a Bachelor’s or Master’s Degree in a Technology Domain.",
//   "job_qualificationC":"Should possess strong collaboration, leadership and conflict-resolution skills.",
//   "job_experience":"Should have 7 plus years’ experience in leading multiple Implementation teams in the Payments Domain."
// }
