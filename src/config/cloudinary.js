const multer=require("multer");
const cloudinary=require("cloudinary").v2;
const {CloudinaryStorage}=require("multer-storage-cloudinary");
cloudinary.config({
    cloud_name : process.env.cloud_name,
    api_key:process.env.api_key,
api_secret:process.env.api_secret,

});
const storage=new CloudinaryStorage({
 cloudinary:cloudinary,
   params: async (req, file) => {
     console.log("FILE MIMETYPE:", file.mimetype); // ✅ check
        
        let resource_type = "auto";
        let format = undefined;

        if (file.mimetype === "application/pdf") {
            resource_type = "raw";
            format = "pdf";
            
        } else if (file.mimetype === "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
            resource_type = "raw";
            format = "docx";
        }

        console.log("RESOURCE TYPE:", resource_type); 

        return {
            folder: "my uploads",
            resource_type: resource_type,
            format: format,
            access_mode: "public"
        };
    }
});

const upload=multer({storage:storage,
    limits: {
        fileSize: 10 * 1024 * 1024 // 10MB limit
    }
});
module.exports={upload,cloudinary};