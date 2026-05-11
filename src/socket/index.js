const sockethandler=(io)=>{
io.on('connection',(Socket)=>{
console.log("user connected",Socket.id);

Socket.on("Join_Room",(roomId)=>{
    Socket.join(roomId);
    console.log(`user${Socket.id}joined room  ${roomId}`);
     io.to(roomId).emit("user-joined", { roomId });
});
Socket.on("Send_Message",(Data)=>{
    io.to(Data.roomId).emit("receive_message",Data);
});
Socket.on("disconnect",()=>{
    console.log(`user disconnected ${Socket.id}`);
});
Socket.on("user-joined-name", (Data) => {
    io.to(Data.roomId).emit("user-joined-name", Data);
});
});
};
module.exports=sockethandler;