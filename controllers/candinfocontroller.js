const CandInfo = require("../models/CandInfoSchema.js");
const fs = require("fs");
const axios = require("axios");

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
      let str = "EUR-C-";
      let x = Date.now().toString(8);
      let y = x.toString().substr(-3);
      let z = Math.floor(Math.random() * 1000);
      let autoGeneratedCandID = str + y + z;
      let generatePublicID = autoGeneratedCandID + cand_name;
      let uploadedfile = await cloudinary.uploader.upload(req.file.path, {
        folder: "CandidateResumes",
        resource_type: "auto",
        public_id: generatePublicID,
      });
      // let uploadedfileAgain = await cloudinary.uploader.upload(
      //   req.file.path,
      //   { ocr: "adv_ocr" },
      //   function (error, result) {
      //     console.log(result);
      //   }
      // );

      const { originalName } = req.file;
      const { secure_url, bytes, format } = uploadedfile;

      const newCandInfo = new CandInfo({
        cand_id: autoGeneratedCandID,
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

      axios
        .post(
          "https://ats-backend-flask.herokuapp.com/data",
          {
            secure_url: "www.abc.com",
            cand_id: "C-345",
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then(function (response) {
          console.log("AI ML resp: ", response.data);
        })
        .catch(function (error) {
          console.log("AI ML error: ", error);
        });

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
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
      });
      let uploadedfileAgain = await cloudinary.api.resource(
        "hmwbckieimbjzs9lwdkh",
        // { public_id: "hmwbckieimbjzs9lwdkh" },
        function (error, result) {
          console.log(
            "OCR result",
            result.info.ocr.adv_ocr.data[0].fullTextAnnotation.text
          );
        }
      );
      // console.log("info: ", uploadedfileAgain);

      // const { secure_url, bytes, format, info } = uploadedfileAgain;
      // console.log("info: ", info);
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
