const express = require("express");
const router = express.Router();
const ShorlistedResumeController = require("../controllers/shortlistedresumecontroller");

// const jobroutes=()=>{

//Public Routes

router.post(
  "/shortlistnewresume",
  ShorlistedResumeController.addshortlistedresume
);

//PRIVATE

// }
module.exports = router;
// module.exports=jobroutes;
