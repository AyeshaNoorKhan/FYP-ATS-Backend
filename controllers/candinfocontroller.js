const CandInfo = require("../models/CandInfoSchema.js");
const CandRes = require("../models/CandResumeSchema.js");
const fs = require("fs");
const { cloudinary } = require("../middlewares/cloudinary");
const upload = require("../middlewares/upload.js");
const { contentType } = require("express/lib/response");

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
    try {
      const newCandInfo = new CandInfo({
        cand_id: cand_id,
        cand_name: cand_name,
        cand_email: cand_email,
        cand_contact: cand_contact,
        //     cand_dob:cand_dob,
        // //    cand_address:cand_address,
        cand_city: cand_city,
        // //    cand_postalcode:cand_postalcode,
        // //    cand_cnic:cand_cnic,
        cand_country: cand_country,
        // //    cand_maritalstatus:cand_maritalstatus,
        // //    cand_source:cand_source,
        // //    cand_referedby:cand_referedby,
        cand_highedu: cand_highedu,
        cand_workexp: cand_workexp,
        cand_gender: cand_gender,
        cand_shiftspref: cand_shiftspref,
        cand_hecverif: cand_hecverif,
        cand_positionApplied: cand_positionApplied,
        cand_Resume: fs.readFileSync("uploads/" + req.file.filename),
      });
      newCandInfo.save();
      // newCandRes.save();
      res.send({ status: "Success", message: "New Candidate Created" });
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
}

module.exports = CandInfoController;
