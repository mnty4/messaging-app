require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const path = require("path");
app.use(cors());
app.use(express.static("public"));

// console.log(socket.rooms);
// console.log(io.sockets.adapter.rooms);

const server = http.createServer(app);
console.log(process.env.origin);
const io = new Server(server, {
  cors: {
    origin: process.env.origin,
    methods: ["GET", "POST"],
  },
});
const rooms = [];
let total = 0;

const addToRoom = (room) => {
  const roomInfo = rooms.find((r) => r[0] === room);
  roomInfo ? ++roomInfo[1] : rooms.push([room, 1]);
  console.log(rooms);
};
const removeFromRoom = (room) => {
  const roomInfo = rooms.find((r) => r[0] === room);
  if (roomInfo) {
    --roomInfo[1];
    if (roomInfo[1] === 0)
      rooms.splice(
        rooms.findIndex((r) => r === roomInfo),
        1
      );
  }
  console.log(rooms);
};

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected.`);
  ++total;
  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`User with ID: ${socket.id} has joined ${room}`);
    addToRoom(room);
    console.log(socket.rooms);
  });
  socket.on("send_message", (messageData) => {
    console.log(messageData);
    socket.to(messageData.room).emit("receive_message", messageData);
  });
  socket.on("leave_room", (room) => {
    console.log(`User with ID: ${socket.id} has left ${room}`);
    removeFromRoom(room);
    socket.leave(room);
  });
  socket.on("refresh_room_info", () => {
    const updatedData = {
      rooms,
      total
    };
    console.log(updatedData);
    io.to(socket.id).emit("receive_refreshed_room_info", updatedData);
  });
  socket.on("typing", (userInfo) => {
    socket.to(userInfo.room).emit('receive_typing', userInfo);
  });
  socket.on('cancel_typing', (userInfo) => {
    socket.to(userInfo.room).emit('receive_cancel_typing', userInfo);
  })
  socket.on("disconnecting", () => {
    console.log(socket.rooms);
    for (let room of socket.rooms) socket.to(room).emit('receive_cancel_typing', { id: socket.id })
    for (let room of socket.rooms) removeFromRoom(room);
  });
  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected.`);
    --total;
  });
});

server.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}...`)
);
