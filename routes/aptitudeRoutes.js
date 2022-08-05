const express = require("express");
const router = express.Router();
const AptitudeTestController = require("../controllers/apttestcontroller.js");

//Public Routes

router.post("/addapttest", AptitudeTestController.addAptTest);
router.get("/getapttests", AptitudeTestController.getAptTest);
router.put("/updateaptques/:id", AptitudeTestController.updateAptitudeQuestion);
router.get("/getapttest/:id", AptitudeTestController.getSpecificAptTest);
router.delete(
  "/deleteaptques/:id",
  AptitudeTestController.deleteAptitudeQuestion
);

//PRIVATE

module.exports = router;
