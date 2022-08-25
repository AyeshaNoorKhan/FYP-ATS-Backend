const FinalShortCand = require("../models/FinalShortlistedCandSchema.js");

class FinalShortlistedCandController {
  static addFinalShortCand = async (req, res) => {
    const { cand_id, job_id, total_score, resume_rank } = req.body;
    if (cand_id && job_id) {
      try {
        let str = "EUR-FC-";
        let x = Date.now().toString(8);
        let y = x.toString().substr(-3);
        let z = Math.floor(Math.random() * 1000);
        let autoGeneratedshortlisted_cand_Id = str + y + z;
        const newFinalShortCand = new FinalShortCand({
          shortlisted_cand_Id: autoGeneratedshortlisted_cand_Id,
          cand_id: cand_id,
          job_id: job_id,
          total_score: total_score,
          resume_rank: resume_rank,
          final_interview_link_status: "Not Invited",
        });
        newFinalShortCand.save();

        res.send({
          status: "Success",
          message: "New Final Shortlisted candidates Created",
        });
      } catch (error) {
        console.log("New", error);
        res.send({
          status: "Failed",
          message: "Sorry, Failed to create new Final Shortlisted candidates ",
        });
      }
    } else {
      res.send({
        status: "Failed",
        message:
          "Sorry, Failed to create new Final Shortlisted candidates (fill all fields)",
      });
    }
  };

  static getAllCandRes = async (req, res) => {
    try {
      const getAllFinalShortCand = await FinalShortCand.find({});
      res.send({ getAllFinalShortCand });
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to retrieve Final Shortlisted candidates",
      });
    }
  };

  static updateFinalInterviewStatus = async (req, res) => {
    try {
      const { final_interview_link_status } = req.body;
      var UpdatedFinalInterviewStatus = {
        final_interview_link_status: final_interview_link_status,
      };
      FinalShortCand.findOneAndUpdate(
        { cand_id: req.params.cid, job_id: req.params.jid },
        UpdatedFinalInterviewStatus,
        { new: true },
        function (err, UpdatedFinalInterviewStatus) {
          if (err) {
            console.log("err", err);
            res.status(500).send(err);
          } else {
            res.status(200).send("Updated Final Interview Status");
          }
        }
      );
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to Update Final Interview Status",
      });
    }
  };
}

module.exports = FinalShortlistedCandController;
