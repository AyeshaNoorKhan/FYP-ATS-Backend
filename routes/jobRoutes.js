const express = require("express");
const router = express.Router();
const JobDetailController = require("../controllers/jobcontroller.js");

// const jobroutes=()=>{

//Public Routes

router.post("/addjob", JobDetailController.addJobDetail);
router.get("/getjobs", JobDetailController.getJobDetail);
router.put("/updatejob", JobDetailController.updateJob);
router.get("/getjob/:id", JobDetailController.getSpecificJobDetail);

//PRIVATE

// }
module.exports = router;
// module.exports=jobroutes;
