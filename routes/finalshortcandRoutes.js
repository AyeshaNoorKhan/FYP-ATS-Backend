const express = require("express");
const router = express.Router();
const FinalShortlistedCandController = require("../controllers/finalshortcandcontroller.js");

//Public Routes

router.post(
  "/addfinalshortlistedcand",
  FinalShortlistedCandController.addFinalShortCand
);
router.get("/getAllCandRes", FinalShortlistedCandController.getAllCandRes);
// router.get("/getCandRes/:cid", FinalShortlistedCandController.getCandRes);

//PRIVATE

module.exports = router;
