const {v4:uuidv4}=require("uuid");
const createRoom= (req,res)=>{
    const roomId=uuidv4();
   return res.redirect(`/chat/${roomId}`);
};
const chatPage=(req,res)=>{
    const roomId=req.params.roomId;
    return res.render("chat",{roomId});
};
const joinRoom =(req,res)=>{
    const roomId=req.query.roomId;
    return res.redirect(`/chat/${roomId}`);
}
module.exports={createRoom,chatPage,joinRoom};