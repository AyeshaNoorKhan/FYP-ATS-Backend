const express = require("express");
const router = express.Router();
const AdminDetailController = require("../controllers/adminController.js");

//Public Routes

router.post("/addadmin", AdminDetailController.addAdminDetail);
router.post("/findadmin", AdminDetailController.findAdmin);

//PRIVATE

module.exports = router;
