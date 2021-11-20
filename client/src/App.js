import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./components/Chat/Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joinedRoom, setJoinedRoom] = useState(false);

  const validate = () => {
    return room.length > 0 && username.length > 0;
  };

  const joinHandler = (e) => {
    e.preventDefault();
    if (!validate()) return console.log(":(");
    console.log("joined room: ", room);
    setJoinedRoom(true);
    socket.emit("join_room", room);
  };

  return (
    <div className="App">
      <form onSubmit={joinHandler} className="form">
        <div className="card">
          <h1 className="title">Join a chat</h1>
          <label className="name" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="name-input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="room" htmlFor="room">
            Room
          </label>
          <input
            id="room"
            type="text"
            className="room-input"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button className="join">Join</button>
        </div>
      </form>
      {joinedRoom && <Chat socket={socket} username={username} room={room} />}
    </div>
  );
}

export default App;
