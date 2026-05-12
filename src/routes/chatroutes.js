const express=require("express");
const router=express.Router();
const {chatPage}=require("../controllers/chatcontroller");

router.get("/chat/:roomKey",chatPage);
module.exports=router;