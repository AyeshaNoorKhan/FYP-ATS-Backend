const JobDetail = require("../models/JobDetailSchema.js");

class JobDetailController {
  static addJobDetail = async (req, res) => {
    const {
      job_id,
      job_code,
      job_category,
      job_title,
      job_location,
      job_positions,
      job_description,
      job_qualification,
      job_experience,
    } = req.body;
    if (
      job_id &&
      job_code &&
      job_category &&
      job_title &&
      job_location &&
      job_positions &&
      job_description &&
      job_experience &&
      job_qualification
    ) {
      try {
        const newJob = new JobDetail({
          job_id: job_id,
          id: job_id,
          job_code: job_code,
          job_category: job_category,
          job_title: job_title,
          job_location: job_location,
          job_positions: job_positions,
          job_description: job_description,
          job_qualification: job_qualification,
          job_experience: job_experience,
        });
        newJob.save();
        res.status(200).json({ message: "New Job Created" });
      } catch (error) {
        res.status(500).json({ message: "Failed to create new Job" });
      }
    } else {
      res.send({ status: "Failed", message: "Fill All Fields" });
    }
  };

  static getJobDetail = async (req, res) => {
    try {
      const getAllJob = await JobDetail.find({});
      res.send({ getAllJob });
    } catch (error) {
      res.send({ status: "Failed", message: "Failed to retrieve Job Data" });
    }
  };

  static updateJob = async (req, res) => {
    try {
      const {
        job_id,
        id,
        job_code,
        job_category,
        job_title,
        job_location,
        job_positions,
        job_description,
        job_qualification,
        job_experience,
      } = req.body;

      var UpdatedJob = {
        job_id: job_id,
        id: id,
        job_code: job_code,
        job_category: job_category,
        job_title: job_title,
        job_location: job_location,
        job_positions: job_positions,
        job_description: job_description,
        job_qualification: job_qualification,
        job_experience: job_experience,
      };

      JobDetail.findOneAndUpdate(
        { job_id: job_id },
        UpdatedJob,
        { new: true },
        function (err, UpdatedJob) {
          if (err) {
            console.log("err", err);
            res.status(500).send(err);
          } else {
            console.log("success");
            res.send(UpdatedJob);
          }
        }
      );
    } catch (error) {
      res.send({ status: "Failed", message: "Failed to update Job Data" });
    }
  };

  static getSpecificJobDetail = async (req, res) => {
    try {
      const getAllJob = await JobDetail.find({ job_id: req.params.id });
      res.send({ getAllJob });
    } catch (error) {
      res.send({ status: "Failed", message: "Failed to retrieve Job Data" });
    }
  };

  static deleteJobDetail = async (req, res) => {
    try {
      JobDetail.deleteOne({ job_id: req.params.id }, function (err, data) {
        if (!err) {
          res.send({
            status: "Success",
            message: "Successfully Deleted the Job Details",
          });
        } else {
          console.log("error");
        }
      });
    } catch (error) {
      res.send({ status: "Failed", message: "Failed to delete Job Details" });
    }
  };
}

module.exports = JobDetailController;
