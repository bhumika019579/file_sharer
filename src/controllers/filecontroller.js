const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const uploadfile=async(req,res)=>{
    try{
const fileURL=req.file.path;
const fileName=req.file.originalname;
const fileType=req.file.mimetype;
const roomKey=req.body.roomKey;
const sender = req.body.sender || "Anonymous";
await prisma.file.create({
    data:{
        url:fileURL,
        fileName:fileName,
        fileType:fileType,
        roomKey:roomKey,
        sender:sender,
    }
});
console.log("URL:",fileURL);
return res.redirect(`/room/${roomKey}`);
    }catch(error){
        console.log("ERROR:",error);
        return res.status(500).send(error.message);
    }
    
};
const getfiles= async(req,res)=>{
    try{
        const roomKey=req.params.key.toLowerCase().trim();
    const files = await prisma.file.findMany({
        where:{roomKey:roomKey}
    }); //used to fetch data from db
    return res.render("room", { files,roomKey });  
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
