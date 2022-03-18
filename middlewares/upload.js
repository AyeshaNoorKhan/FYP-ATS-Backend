const path = require('path');
const multer = require('multer');

const Storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, './uploads')
    },
    filename: (req,file,cb)=>{
       // let ext= path.extname(file.originalname);
        cb(null,Date.now() + "--" + file.originalname);
    }
})
const filefilter =(req, file, cb)=>{
        if( file.mimetype == "image/png" || file.mimetype == "image/jpg")
        {
            callback(null,true)
        }
        else
        {
            console.log("Only jpg and png file are allowed");
            callback(null,false)
        }
}
const upload = multer ({
    storage:Storage,
   // fileFilter : filefilter
    // limits: {
    //     fileSize: 1024 * 1024 * 2
    // }
});

module.exports =upload;