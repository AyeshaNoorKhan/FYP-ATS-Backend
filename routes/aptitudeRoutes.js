const express = require('express');
const router = express.Router();
const AptitudeTestController = require('../controllers/apttestcontroller.js');


//Public Routes

router.post('/addapttest',AptitudeTestController.addAptTest);
router.get('/getapttests',AptitudeTestController.getAptTest);

//PRIVATE 

module.exports=router;
