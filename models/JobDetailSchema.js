const mongoose= require('mongoose');
const jwt=require('jsonwebtoken');
require("dotenv").config();

const jobSchema=new mongoose.Schema({
    date:              {type:Date,default:Date.now},
    job_id:            {type:String,unique:true},
    id:                {type:String,unique:true},
    job_code:          {type:String,required:true,unique:true},
    job_category:      {type:String,required:true,},
    job_title:         {type:String,required:true,},
    job_location:      {type:String,required:true,},
    job_positions:     {type:Number,required:true,},
    job_descriptionA:  {type:String,required:true,},
    job_descriptionB:  {type:String,required:false,},
    job_descriptionC:  {type:String,required:false,},
    job_descriptionD:  {type:String,required:false,},
    job_descriptionE:  {type:String,required:false,},
    job_descriptionF:  {type:String,required:false,},
    job_descriptionG:  {type:String,required:false,},
    job_descriptionH:  {type:String,required:false,},
    job_qualificationA:{type:String,required:false ,},
    job_qualificationB:{type:String,required:false,},
    job_qualificationC:{type:String,required:false,},
    job_qualificationD:{type:String,required:false,},
    job_qualificationE:{type:String,required:false,},
    job_experience:    {type:String,required:true ,}
})

const JobDetail= new mongoose.model('JobDetail',jobSchema);
module.exports=JobDetail;
