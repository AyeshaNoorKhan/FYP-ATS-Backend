const express = require("express");
const router = express.Router();
const ShorlistedResumeController = require("../controllers/shortlistedresumecontroller");

//Public Routes

router.post(
  "/shortlistnewresume",
  ShorlistedResumeController.addshortlistedresume
);
router.get(
  "/getshortlistedresume",
  ShorlistedResumeController.getShortlistedResumes
);

//PRIVATE

module.exports = router;
