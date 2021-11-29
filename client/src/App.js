import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Rooms from "./components/Rooms/Rooms";
import "bootstrap/dist/css/bootstrap.min.css";

// username is typing...
// username and username2 is typing...
// username and 2 others is typing...

// avatars, choose or random options

// update the refresh logo

// scroll wheel

// organise my commits

// number of users online

// database

console.log(process.env.REACT_APP_API_ENDPOINT);
const socket = io.connect(process.env.REACT_APP_API_ENDPOINT);
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joinedRoom, setJoinedRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const validateUsername = () => {
    return username.length > 0;
  };
  const validateRoom = () => {
    return room.length > 0;
  };

  const joinHandler = async (e) => {
    e && e.preventDefault();
    if (!validateUsername() || !validateRoom()) return console.log(":(");
    await join(room);
  };

  const join = async (newRoom) => {
    if (!validateUsername()) return console.log(":(");
    console.log("joined room: ", newRoom);
    await socket.emit("leave_room", joinedRoom);
    await socket.emit("join_room", newRoom);
    setJoinedRoom(newRoom);
    setRoom("");
    refreshHandler();
  };

  const refreshHandler = async () => {
    await socket.emit("refresh_rooms");
  };

  useEffect(() => {
    socket.on("receive_refreshed_rooms", (roomArr) => {
      setRooms(roomArr);
    });
  }, []);

  return (
    <div className="App">
      <img
        src="/images/ball-talk-logo-v1_edited.jpg"
        className="logo mb-3"
        alt="logo"
      />
      <Join
        joinHandler={joinHandler}
        setRoom={setRoom}
        setUsername={setUsername}
        username={username}
        room={room}
      />
      <Rooms
        refreshHandler={refreshHandler}
        rooms={rooms}
        join={join}
        joinedRoom={joinedRoom}
      />
      {joinedRoom !== "" && (
        <Chat socket={socket} username={username} room={joinedRoom} />
      )}
    </div>
  );
}

export default App;
