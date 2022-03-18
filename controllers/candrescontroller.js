const CandRes=require('../models/CandResumeSchema.js');

class CandResController{

    static getAllCandRes = async (req,res)=>{
        try
        {
            const getAllCandR = await CandRes.find({});
            res.send({getAllCandR});
        }
        catch(error)
        {
            res.send({"status":"Failed", "message":"Failed to retrieve Candidate Resume"});
        }
    }

    static getCandRes = async (req,res)=>{
        try
        {
            const getCandR = await CandRes.find({cand_id:req.params.cid});
            res.send({getCandR});
        }
        catch(error)
        {
            res.send({"status":"Failed", "message":"Failed to retrieve Candidate Resume"});
        }
    }



}

module.exports= CandResController;