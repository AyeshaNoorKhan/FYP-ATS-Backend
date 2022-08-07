const CandInfo = require("../models/CandInfoSchema.js");
const fs = require("fs");
const { contentType } = require("express/lib/response");
const cloudinary = require("cloudinary").v2;
class CandInfoController {
  static addCandInfo = async (req, res) => {
    //      const {cand_id,cand_name,cand_dob,cand_contact,cand_address,cand_city,cand_postalcode,cand_cnic,cand_country,cand_maritalstatus,cand_source,cand_referedby,cand_highedu,cand_workexp}=req.body;
    const {
      cand_id,
      cand_name,
      cand_email,
      cand_contact,
      cand_city,
      cand_country,
      cand_highedu,
      cand_workexp,
      cand_gender,
      cand_shiftspref,
      cand_hecverif,
      cand_positionApplied,
      cand_Resume,
    } = req.body;
    //    if (cand_id && cand_name && cand_email && cand_contact && cand_city && cand_country && cand_highedu && cand_workexp && cand_gender && cand_shiftspref && cand_hecverif && cand_positionApplied && cand_Resume )
    //      {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
    try {
      let generatePublicID = cand_id + cand_name;
      let uploadedfile = await cloudinary.uploader.upload(req.file.path, {
        folder: "CandidateResumes",
        resource_type: "auto",
        public_id: generatePublicID,
      });
      const { originalName } = req.file;
      const { secure_url, bytes, format } = uploadedfile;
      const newCandInfo = new CandInfo({
        cand_id: cand_id,
        cand_name: cand_name,
        cand_email: cand_email,
        cand_contact: cand_contact,
        cand_city: cand_city,
        cand_country: cand_country,
        cand_highedu: cand_highedu,
        cand_workexp: cand_workexp,
        cand_gender: cand_gender,
        cand_shiftspref: cand_shiftspref,
        cand_hecverif: cand_hecverif,
        cand_positionApplied: cand_positionApplied,
        cand_ResumeURL: secure_url,
        cand_Resume: fs.readFileSync("uploads/" + req.file.filename),
      });
      newCandInfo.save();
      // newCandRes.save();
      res.send({
        status: "Success",
        message: "New Candidate Created",
      });
    } catch (error) {
      console.log("New", error);
      res.send({
        status: "Failed",
        message: "Sorry, Failed to create new Candidate ",
      });
    }
  };

  static getAllCandInfo = async (req, res) => {
    try {
      const getAllCand = await CandInfo.find({});
      res.send({ getAllCand });
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to retrieve Candidate Data",
      });
    }
  };

  static getCandInfo = async (req, res) => {
    try {
      const getCand = await CandInfo.find({ cand_id: req.params.cid });
      res.send({ getCand });
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to retrieve Candidate Data",
      });
    }
  };

  static verifyCandidate = async (req, res) => {
    const { verify_cand_email } = req.body;
    try {
      const getCand = await CandInfo.find({ cand_email: verify_cand_email });
      console.log("getCand city:", getCand[0].cand_city);
      res.status(200).json({ message: "Applicant Found" });
    } catch (err) {
      res.status(500).json({ message: "Applicant Not Found" });
    }
  };
}

module.exports = CandInfoController;
