const JobDetail=require('../models/JobDetailSchema.js');

class JobDetailController{

    static addJobDetail = async (req,res)=>{
        const {job_id,job_code,job_category,job_title,job_location,job_positions,
            job_descriptionA,job_descriptionB,job_descriptionC,job_descriptionD,job_descriptionE,job_descriptionF,job_descriptionG,job_descriptionH,
            job_qualificationA,job_qualificationB,job_qualificationC,job_qualificationD,job_qualificationE,job_experience    }=req.body;
        if (job_id && job_code &&  job_category &&  job_title &&  job_location &&  job_positions &&  job_descriptionA  && job_experience)
        {
            try{
                const newJob = new JobDetail({
                    job_id:job_id,
                    job_code:job_code,
                    job_category:job_category,
                    job_title:job_title,
                    job_location:job_location,
                    job_positions:job_positions,
                    job_descriptionA:job_descriptionA,
                    job_descriptionB:job_descriptionB,
                    job_descriptionC:job_descriptionC,
                    job_descriptionD:job_descriptionD,
                    job_descriptionE:job_descriptionE,
                    job_descriptionF:job_descriptionF,
                    job_descriptionG:job_descriptionG,
                    job_descriptionH:job_descriptionH,
                    job_qualificationA:job_qualificationA,
                    job_qualificationB:job_qualificationB,
                    job_qualificationC:job_qualificationC,
                    job_qualificationD:job_qualificationD,
                    job_qualificationE:job_qualificationE,
                    job_experience:job_experience
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

    static updateJob = async (req,res) => {
        try
        {
            const {_id,job_id,job_code,job_category,job_title,job_location,job_positions,
                job_descriptionA,job_descriptionB,job_descriptionC,job_descriptionD,job_descriptionE,job_descriptionF,job_descriptionG,job_descriptionH,
                job_qualificationA,job_qualificationB,job_qualificationC,job_qualificationD,job_qualificationE,job_experience}=req.body;
           
                var UpdatedJob = {
                job_id:job_id,
                job_code:job_code,
                job_category:job_category,
                job_title:job_title,
                job_location:job_location,
                job_positions:job_positions,
                job_descriptionA:job_descriptionA,
                job_descriptionB:job_descriptionB,
                job_descriptionC:job_descriptionC,
                job_descriptionD:job_descriptionD,
                job_descriptionE:job_descriptionE,
                job_descriptionF:job_descriptionF,
                job_descriptionG:job_descriptionG,
                job_descriptionH:job_descriptionH,
                job_qualificationA:job_qualificationA,
                job_qualificationB:job_qualificationB,
                job_qualificationC:job_qualificationC,
                job_qualificationD:job_qualificationD,
                job_qualificationE:job_qualificationE,
                job_experience:job_experience
            };
          
            JobDetail.findOneAndUpdate({job_id: job_id}, UpdatedJob, { new: true }) 
        }
        catch(error)
        {
            res.send({"status":"Failed", "message":"Failed to update Job Data"});
        }
    }




}

module.exports=JobDetailController;