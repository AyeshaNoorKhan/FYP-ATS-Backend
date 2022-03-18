const express = require('express');
const router = express.Router();
const CandResController = require('../controllers/candrescontroller.js');


//Public Routes

//router.post('/addcandinfo',CandResController.addCandInfo);
router.get('/getAllCandRes',CandResController.getAllCandRes);
router.get('/getCandRes/:cid',CandResController.getCandRes);

//PRIVATE 

module.exports=router;
