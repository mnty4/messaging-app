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

// TODO: view rooms in use, number of participants, number of participants reduces on disconnect

io.on("connection", (socket) => {
  console.log(`User ${socket.id} connected.`);

  socket.on("join_room", (room) => {
    socket.join(room);
    console.log(`User with ID: ${socket.id} has joined ${room}`);
  });
  socket.on("send_message", (messageData) => {
    console.log(messageData);
    socket.to(messageData.room).emit("receive_message", messageData);
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} disconnected.`);
  });
});

server.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}...`)
);
