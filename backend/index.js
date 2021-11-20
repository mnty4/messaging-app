const app = require("express")();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

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

const port = 3001;
server.listen(port, () => console.log(`listening on port ${port}...`));
