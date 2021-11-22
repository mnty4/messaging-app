import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Chat.module.css";
import Message from "../Message/Message";

const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const submitHandler = async (e) => {
    e && e.preventDefault();
    if (message.length < 1) return;

    const messageData = {
      username,
      room,
      message,
      time: (() => {
        const hours = new Date().getHours();
        let minutes = new Date().getMinutes();
        if (minutes < 10) minutes = "0" + minutes;
        if (hours === 0) return `12:${minutes}am`;
        return hours > 12
          ? `${hours - 12}:${minutes}pm`
          : `${hours}:${minutes}am`;
      })(),
    };
    await socket.emit("send_message", messageData);

    console.log(messageList);
    setMessageList((messages) => [...messages, messageData]);
  };

  useEffect(() => {
    socket.on("receive_message", (messageData) => {
      console.log(messageList);
      setMessageList((messages) => [...messages, messageData]);
    });
  }, [socket]);

  return (
    <div className={styles.Chat}>
      <div>
        <h2 className={styles.chatHeader}>{room} - Live Chat</h2>
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && submitHandler()}
        />
        <button onClick={submitHandler}>Send</button>
      </div>
      <div className={styles.chatBody}>
        {messageList.map((userData, i) => {
          return (
            // <div
            //   style={
            //     i % 2
            //       ? {
            //           alignSelf: "flex-end",
            //           width: "80%",
            //           backgroundColor: "blue",
            //         }
            //       : {
            //           alignSelf: "flex-start",
            //           width: "80%",
            //           backgroundColor: "red",
            //         }
            //   }
            // >
            <Message
              key={i}
              userData={userData}
              isSelf={username === userData.username}
            />
            // </div>
          );
        })}
      </div>
    </div>
  );
};

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
