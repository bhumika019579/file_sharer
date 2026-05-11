const express=require("express");
const router=express.Router();
const {upload}=require("../src/config/cloudinary");
const {uploadfile,getfiles,deletefile}=require("../controllers/filecontroller");
router.get("/",getfiles);
router.post("/upload",(req,res,next)=>{
    upload.single('profileImage')(req,res,(err)=>{
        if(err){
            if (err.code === 'LIMIT_FILE_SIZE') {
                return res.status(413).send("File too large! Max size is 10MB");
            }
            console.log("MULTER ERROR:", err);
            return res.status(500).send(err.message);
        }
        next();
    })
},uploadfile);
router.delete("/delete/:id", deletefile);
module.exports=router;