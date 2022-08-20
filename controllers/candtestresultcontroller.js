const CandTestRes = require("../models/CandidateTestResultSchema.js");

class CandidateTestResultController {
  static addCandTestResult = async (req, res) => {
    const {
      cand_id,
      job_id,
      oop_score,
      ds_score,
      gk_score,
      other_score,
      total_score,
    } = req.body;
    if (
      cand_id &&
      job_id &&
      oop_score &&
      ds_score &&
      gk_score &&
      other_score &&
      total_score
    ) {
      try {
        let str = "EUR-CS-";
        let x = Date.now().toString(8);
        let y = x.toString().substr(-3);
        let z = Math.floor(Math.random() * 1000);
        let autoGeneratedCandTestResultID = str + y + z;
        const newtestresult = new CandTestRes({
          cand_score_id: autoGeneratedCandTestResultID,
          cand_id: cand_id,
          job_id: job_id,
          oop_score: oop_score,
          ds_score: ds_score,
          gk_score: gk_score,
          other_score: other_score,
          total_score: total_score,
        });
        newtestresult.save();
        res.status(200).json({ message: "New Candidate Test Result Saved" });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Failed to  save New Candidate Test Result" });
      }
    } else {
      res.send({ status: "Failed", message: "Fill All Fields" });
    }
  };

  static getAllTestResult = async (req, res) => {
    try {
      const getAllCandidateTestResult = await CandTestRes.find({});
      res.send({ getAllCandidateTestResult });
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to retrieve Candidate Test Result Data",
      });
    }
  };

  static getSpecificCandTestResult = async (req, res) => {
    try {
      const getonecandtestresult = await CandTestRes.find({
        job_id: req.params.jid,
        cand_id: req.params.cid,
      });
      res.send({ getonecandtestresult });
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to retrieve Candidate Test result",
      });
    }
  };
}

module.exports = CandidateTestResultController;
