const express = require("express");
const router = express.Router();
const CandInfoController = require("../controllers/candinfocontroller.js");
const upload = require("../middlewares/upload.js");

//Public Routes

router.post(
  "/addcandinfo",
  upload.single("cand_Resume"),
  CandInfoController.addCandInfo
);
router.get("/getallcandinfo", CandInfoController.getAllCandInfo);
router.get("/getcandinfo/:cid", CandInfoController.getCandInfo);
router.post("/verifycandidate", CandInfoController.verifyCandidate);

//PRIVATE

module.exports = router;
