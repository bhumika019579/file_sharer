
const chatPage=(req,res)=>{
    const {roomKey}=req.params;
    if (!roomKey) return res.redirect('/');
    return res.render("chat",{roomKey});
};

module.exports={chatPage,};