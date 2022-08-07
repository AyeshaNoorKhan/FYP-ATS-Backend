const express = require("express");
const router = express.Router();
const CandidateTestResultController = require("../controllers/candtestresultcontroller.js");

//Public Routes

router.post(
  "/addcandtestresult",
  CandidateTestResultController.addCandTestResult
);
router.get(
  "/getcandtestresult/:cid",
  CandidateTestResultController.getSpecificCandTestResult
);
router.get(
  "/getallcandtestresult",
  CandidateTestResultController.getAllTestResult
);

//PRIVATE

module.exports = router;
