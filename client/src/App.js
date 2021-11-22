import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
console.log(process.env.REACT_APP_API_ENDPOINT);
const socket = io.connect(process.env.REACT_APP_API_ENDPOINT);
// TODO: add scroll wheel for message display
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joinedRoom, setJoinedRoom] = useState("");

  const validate = () => {
    return room.length > 0 && username.length > 0;
  };

  const joinHandler = (e) => {
    e && e.preventDefault();
    if (!validate()) return console.log(":(");
    console.log("joined room: ", room);
    socket.emit("leave_room", joinedRoom);
    setJoinedRoom(room);
    socket.emit("join_room", room);
  };

  return (
    <div className="App">
      <Join
        joinHandler={joinHandler}
        setRoom={setRoom}
        setUsername={setUsername}
      />
      {joinedRoom !== "" && (
        <Chat socket={socket} username={username} room={joinedRoom} />
      )}
    </div>
  );
}

export default App;
