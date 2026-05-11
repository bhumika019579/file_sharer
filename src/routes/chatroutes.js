const express=require("express");
const router=express.Router();
const {createRoom,chatPage,joinRoom}=require("../controllers/chatcontroller");
router.get("/create-room",createRoom);
router.get("/chat/:roomId",chatPage);
router.get("/join-room",joinRoom);
module.exports=router;