import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Rooms from "./components/Rooms/Rooms";
import "bootstrap/dist/css/bootstrap.min.css";

// TODO: avatars, choose or random options

// TODO: scroll wheel

// TODO: refactor

// TODO: invalid input

// TODO: organise my commits

// TODO: database

console.log(process.env.REACT_APP_API_ENDPOINT);
const socket = io.connect(process.env.REACT_APP_API_ENDPOINT);
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joinedRoom, setJoinedRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const [onlineTotal, setOnlineTotal] = useState(1);
  const [wheelIsGrey, setWheelIsGrey] = useState(false);

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
    setWheelIsGrey(true);
    await socket.emit("refresh_room_info");
  };

  useEffect(() => {
    socket.on("receive_refreshed_room_info", ({rooms, total}) => {
      setRooms(rooms);
      setOnlineTotal(total);
      setWheelIsGrey(false);
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
        wheelIsGrey={wheelIsGrey}
        rooms={rooms}
        join={join}
        joinedRoom={joinedRoom}
        onlineTotal={onlineTotal}
      />
      {joinedRoom !== "" && (
        <Chat socket={socket} username={username} room={joinedRoom} />
      )}
    </div>
  );
}

export default App;
