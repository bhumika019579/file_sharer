const sockethandler=(io)=>{
io.on('connection',(Socket)=>{
console.log("user connected",Socket.id);

Socket.on("Join_Room",(roomKey)=>{
    Socket.join(roomKey);
    
     io.to(roomKey).emit("user-joined", { roomKey });
});
Socket.on("Send_Message",(Data)=>{
    io.to(Data.roomKey).emit("receive_message",Data);
});
Socket.on("disconnect",()=>{
    console.log(`user disconnected ${Socket.id}`);
});
Socket.on("user-joined-name", (Data) => {
    io.to(Data.roomKey).emit("user-joined-name", Data);
});
});
};
module.exports=sockethandler;