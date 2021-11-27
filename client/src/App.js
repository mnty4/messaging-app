import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";
import Rooms from "./components/Rooms/Rooms";
import "bootstrap/dist/css/bootstrap.min.css";

console.log(process.env.REACT_APP_API_ENDPOINT);
const socket = io.connect(process.env.REACT_APP_API_ENDPOINT);
function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [joinedRoom, setJoinedRoom] = useState("");
  const [rooms, setRooms] = useState([]);
  const validate = () => {
    return room.length > 0 && username.length > 0;
  };

  const joinHandler = async (e) => {
    e && e.preventDefault();
    if (!validate()) return console.log(":(");
    console.log("joined room: ", room);
    await socket.emit("leave_room", joinedRoom);
    await socket.emit("join_room", room);
    setJoinedRoom(room);
    setRoom("");
    refreshHandler();
  };

  const refreshHandler = async () => {
    await socket.emit("refresh_rooms");
  };

  useEffect(() => {
    socket.on("receive_refreshed_rooms", (roomArr) => {
      setRooms(roomArr);
      console.log(rooms);
    });
  }, []);

  return (
    <div className="App">
      <Join
        joinHandler={joinHandler}
        setRoom={setRoom}
        setUsername={setUsername}
        username={username}
        room={room}
      />
      <Rooms refreshHandler={refreshHandler} rooms={rooms} />
      {joinedRoom !== "" && (
        <Chat socket={socket} username={username} room={joinedRoom} />
      )}
    </div>
  );
}

export default App;
