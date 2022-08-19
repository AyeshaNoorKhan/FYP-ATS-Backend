const JobDetail = require("../models/ShorlistedResumeSchema.js");

class ShorlistedResumeController {
  static addshortlistedresume = async (req, res) => {
    const { short_resume_id, cand_id, job_id, resume_rank, resume_url } =
      req.body;
    if (
      cand_id &&
      // job_id,
      resume_rank &&
      resume_url
    ) {
      try {
        let str = "EUR-RS-";
        let x = Date.now().toString(8);
        let y = x.toString().substr(-3);
        let z = Math.floor(Math.random() * 1000);
        let autoGeneratedResumeShortlistedID = str + y + z;
        const newShortlistedResume = new JobDetail({
          short_resume_id: autoGeneratedResumeShortlistedID,
          cand_id: cand_id,
          job_id: job_id,
          resume_rank: resume_rank,
          resume_url: resume_url,
        });
        newShortlistedResume.save();
        res.status(200).json({ message: "New Resume Shortlisted" });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Failed to add New Resume Shortlisted" });
      }
    } else {
      res.send({ status: "Failed", message: "Fill All Fields" });
    }
  };
}

module.exports = ShorlistedResumeController;
