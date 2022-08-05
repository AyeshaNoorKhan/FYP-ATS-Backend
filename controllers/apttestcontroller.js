const AptTest = require("../models/AptitudeTestSchema.js");

class AptitudeTestController {
  static addAptTest = async (req, res) => {
    const {
      aptTest_id,
      aptTest_category,
      aptTest_question,
      aptTest_optionA,
      aptTest_optionB,
      aptTest_optionC,
      aptTest_optionD,
      aptTest_answer,
    } = req.body;
    if (
      aptTest_id &&
      aptTest_category &&
      aptTest_question &&
      aptTest_optionA &&
      aptTest_optionB &&
      aptTest_answer
    ) {
      try {
        const newAptTest = new AptTest({
          aptTest_id: aptTest_id,
          id: aptTest_id,
          aptTest_category: aptTest_category,
          aptTest_question: aptTest_question,
          aptTest_optionA: aptTest_optionA,
          aptTest_optionB: aptTest_optionB,
          aptTest_optionC: aptTest_optionC,
          aptTest_optionD: aptTest_optionD,
          aptTest_answer: aptTest_answer,
        });
        newAptTest.save();
        res.status(200).json({ message: "New Aptitude Test Question Added" });
      } catch (error) {
        res
          .status(500)
          .json({ message: "Failed to add Aptitude Test Question" });
      }
    } else {
      res.send({ status: "Failed", message: "Fill All Fields" });
    }
  };

  static getAptTest = async (req, res) => {
    try {
      const getAllAptTest = await AptTest.find({});
      res.send({ getAllAptTest });
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to retrieve Aptitude Test Data",
      });
    }
  };
  static updateAptitudeQuestion = async (req, res) => {
    try {
      const {
        aptTest_id,
        aptTest_category,
        aptTest_question,
        aptTest_optionA,
        aptTest_optionB,
        aptTest_optionC,
        aptTest_optionD,
        aptTest_answer,
      } = req.body;

      var UpdatedAptitudeQues = {
        aptTest_id: aptTest_id,
        id: aptTest_id,
        aptTest_category: aptTest_category,
        aptTest_question: aptTest_question,
        aptTest_optionA: aptTest_optionA,
        aptTest_optionB: aptTest_optionB,
        aptTest_optionC: aptTest_optionC,
        aptTest_optionD: aptTest_optionD,
        aptTest_answer: aptTest_answer,
      };

      AptTest.findOneAndUpdate(
        { aptTest_id: aptTest_id },
        UpdatedAptitudeQues,
        { new: true },
        function (err, UpdatedAptitudeQues) {
          if (err) {
            console.log("err", err);
            res.status(500).send(err);
          } else {
            console.log("success");
            res.send(UpdatedAptitudeQues);
          }
        }
      );
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to update Aptitude Test Question",
      });
    }
  };
  static getSpecificAptTest = async (req, res) => {
    try {
      const getaptques = await AptTest.find({ aptTest_id: req.params.id });
      res.send({ getaptques });
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to retrieve Aptitude Test Question",
      });
    }
  };

  static deleteAptitudeQuestion = async (req, res) => {
    try {
      AptTest.deleteOne({ aptTest_id: req.params.id }, function (err, data) {
        if (!err) {
          res.send({
            status: "Success",
            message: "Successfully Deleted the Aptitude Question",
          });
        } else {
          console.log("error");
        }
      });
    } catch (error) {
      res.send({
        status: "Failed",
        message: "Failed to delete Aptitude Question",
      });
    }
  };
}

module.exports = AptitudeTestController;
