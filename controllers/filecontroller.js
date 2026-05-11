const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const uploadfile=async(req,res)=>{
    try{
const fileURL=req.file.path;
const fileName=req.file.originalname;
const fileType=req.file.mimetype;
await prisma.file.create({
    data:{
        url:fileURL,
        fileName:fileName,
        fileType:fileType,
    }
});
console.log("URL:",fileURL);
return res.redirect('/');
    }catch(error){
        console.log("ERROR:",error);
        return res.status(500).send(error.message);
    }
    
};
const getfiles= async(req,res)=>{
    try{
    const files = await prisma.file.findMany(); //used to fetch data from db
    return res.render("index", { files });  
    } catch(error){
        console.log("ERROR:",error);
        return res.status(500).send(error.message);
    }
};
const deletefile = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        await prisma.file.delete({
            where: { id: id }
        });
        return res.json({ success: true });
    } catch (error) {
        console.log("ERROR:", error);
        return res.status(500).send(error.message);
    }
};

module.exports = { uploadfile, getfiles, deletefile };
