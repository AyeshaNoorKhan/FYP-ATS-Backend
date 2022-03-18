const mongoose= require('mongoose');
const jwt=require('jsonwebtoken');
require("dotenv").config();

const jobSchema=new mongoose.Schema({

    date:{type:Date,default:Date.now},
    job_id:{type:String,unique:true},
    job_code:{type:String,required:true,unique:true},
    job_category:{type:String,required:true,},
    job_title:{type:String,required:true,},
    job_location:{type:String,required:true,},
    job_positions:{type:Number,required:true,},
    job_requirement:{type:String,required:true,},
    job_workexp:{type:String,required:true  ,}
    
})

const JobDetail= new mongoose.model('JobDetail',jobSchema);
module.exports=JobDetail;
