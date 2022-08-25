const express = require("express");
const router = express.Router();
const FinalShortlistedCandController = require("../controllers/finalshortcandcontroller.js");

//Public Routes

router.post(
  "/addfinalshortlistedcand",
  FinalShortlistedCandController.addFinalShortCand
);
router.get(
  "/getAllFinalShortCand",
  FinalShortlistedCandController.getAllCandRes
);
router.put(
  "/updateFinalInterviewStatus/:jid/:cid",
  FinalShortlistedCandController.updateFinalInterviewStatus
);

//PRIVATE

module.exports = router;
