const mongoose= require('mongoose');
const jwt=require('jsonwebtoken');
require("dotenv").config();

const CandResSchema=new mongoose.Schema({

    date:{type:Date,default:Date.now},
    cand_ResId:{type:String,unique:true,required:true},
    cand_id:{type:String,required:true},
    cand_Res:{type:String,required:true}

})

const CandRes= new mongoose.model('CandRes',CandResSchema);
module.exports=CandRes;
