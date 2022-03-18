const JobDetail=require('../models/JobDetailSchema.js');

class JobDetailController{

    static addJobDetail = async (req,res)=>{
        const {job_id,job_code,job_category,job_title,job_location,job_positions,job_requirement,job_workexp}=req.body;
        if (job_id && job_code &&  job_category &&  job_title &&  job_location &&  job_positions &&  job_requirement &&  job_workexp)
        {
            try{
                const newJob = new JobDetail({
                    job_id:job_id,
                    job_code:job_code,
                    job_category:job_category,
                    job_title:job_title,
                    job_location:job_location,
                    job_positions:job_positions,
                    job_requirement:job_requirement,
                    job_workexp:job_workexp
                })
                newJob.save();
                res.send({"status":"Success", "message":"New Job Created"})
            }
            catch(error)
            {
                res.send({"status":"Failed", "message":"Failed to create new Job"})
            }
           
        }
        else{
            res.send({"status":"Failed", "message":"Fill All Fields"})
        }
    }

    static getJobDetail = async (req,res)=>{
        try
        {
            const getAllJob = await JobDetail.find({});
            res.send({getAllJob});
        }
        catch(error)
        {
            res.send({"status":"Failed", "message":"Failed to retrieve Job Data"});
        }
    }




}

module.exports=JobDetailController;