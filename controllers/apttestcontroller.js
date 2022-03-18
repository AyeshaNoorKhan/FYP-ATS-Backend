const AptTest=require('../models/AptitudeTestSchema.js');

class AptitudeTestController{

    static addAptTest = async (req,res)=>{
        const {aptTest_id,aptTest_category,aptTest_question,aptTest_optionA,aptTest_optionB,aptTest_optionC,aptTest_answer}=req.body;
        if (aptTest_id && aptTest_category && aptTest_question && aptTest_optionA && aptTest_optionB && aptTest_optionC && aptTest_answer)
        {
            try{
                const newAptTest = new AptTest({
                    aptTest_id:aptTest_id,
                    aptTest_category:aptTest_category,
                    aptTest_question:aptTest_question,
                    aptTest_optionA:aptTest_optionA,
                    aptTest_optionB:aptTest_optionB,
                    aptTest_optionC:aptTest_optionC,
                    aptTest_answer:aptTest_answer
                })
                newAptTest.save();
                res.send({"status":"Success", "message":"New Aptitude Test Added"})
            }
            catch(error)
            {
                res.send({"status":"Failed", "message":"Failed to add Aptitude Test"})
            }
           
        }
        else{
            res.send({"status":"Failed", "message":"Fill All Fields"})
        }
    }

    static getAptTest = async (req,res)=>{
        try
        {
            const getAllAptTest = await AptTest.find({});
            res.send({getAllAptTest});
        }
        catch(error)
        {
            res.send({"status":"Failed", "message":"Failed to retrieve Aptitude Test Data"});
        }
    }

}

module.exports=AptitudeTestController;