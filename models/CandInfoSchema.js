const mongoose= require('mongoose');
const jwt=require('jsonwebtoken');
require("dotenv").config();

const CandInfoSchema=new mongoose.Schema({

    date:{type:Date,default:Date.now},
    cand_id:{type:String,unique:true},
    cand_name:{type:String,required:false},
  //cand_dob:{type:Date,required:true,},
    cand_email:{type:String,required:false,},
    cand_contact:{type:String,required:false,},
  //cand_address:{type:String,required:false,},
    cand_city:{type:String,required:false,},
  //cand_postalcode:{type:Number,required:false,},
  //cand_cnic:{type:String,required:false,},
    cand_country:{type:String,required:false,},
  //cand_maritalstatus:{type:String,required:false,},
  //cand_source:{type:String,required:false,},
  //cand_referedby:{type:String,required:false,},
    cand_highedu:{type:String,required:false,},
    cand_workexp:{type:Number,required:false,},
    cand_gender:{type:String,required:false,},
    cand_shiftspref:{type:String,required:false,},
    cand_hecverif:{type:String,required:false,},
    cand_Resume:{type:String,required:false,}
    // cand_Resume:{data:Buffer,contentType:String}
})

const CandInfo= new mongoose.model('CandInfo',CandInfoSchema);
module.exports=CandInfo;


// {
//     "cand_id":"C-461",
//     "cand_name":"Noor Khan",
//     "cand_email":"noor@gmail.com",
//     "cand_contact":"0332-8224649",
//     "cand_dob":"2000-11-1",
//     "cand_city":"Karachi",
//     "cand_country":"Pakistan",
//     "cand_highedu":"Bachelors",
//     "cand_workexp":4,
//     "cand_gender":"Male",
//     "cand_shiftspref":"Night Only",
//     "cand_hecverif":"Yes"
// }