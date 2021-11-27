require("dotenv").config();
const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const path = require("path");
app.use(cors());
app.use(express.static("public"));

const server = http.createServer(app);
console.log(process.env.origin);
const io = new Server(server, {
  cors: {
    origin: process.env.origin,
    methods: ["GET", "POST"],
  },
});
const rooms = [];

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

// const addUserToRoom = (room) => {
//   if (rooms.find( => room === )) rooms.set(room, []);
//   rooms.get(room).push(socket.id);
// };
// const removeUserFromRoom = (room) => {
//   if (rooms.get(room).length <= 1) rooms.delete(room);
//   else rooms.get(room).filter((id) => id !== socket.id);
// };
// TODO: view rooms in use, number of participants, number of participants reduces on disconnect

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected.`);

  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`User with ID: ${socket.id} has joined ${room}`);
    addToRoom(room);
    console.log(socket.rooms);
  });
  socket.on("send_message", (messageData) => {
    console.log(messageData);
    socket.to(messageData.room).emit("receive_message", messageData);
    // console.log(io.sockets.adapter.rooms);
  });
  socket.on("leave_room", (room) => {
    console.log(`User with ID: ${socket.id} has left ${room}`);
    removeFromRoom(room);
    socket.leave(room);
  });
  socket.on("refresh_rooms", () => {
    io.to(socket.id).emit("receive_refreshed_rooms", rooms);
    console.log(rooms);
    console.log(JSON.stringify(rooms));
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected.`);
    console.log(socket.rooms);
    // removeFromRoom(room);
  });
});

server.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}...`)
);
