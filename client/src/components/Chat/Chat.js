import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Chat.module.css";
import Message from "../Message/Message";

const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (message.length < 1) return;
    const messageData = {
      username,
      room,
      message,
      time: (() => {
        const hours = new Date().getHours();
        const minutes = new Date().getMinutes();
        return hours > 12
          ? `${hours - 12}:${minutes}pm`
          : `${hours}:${minutes}am`;
      })(),
    };
    setMessageList([...messageList, messageData]);
    await socket.emit("send_message", messageData);
  };

  useEffect(() => {
    socket.on("receive_message", (messageData) => {
      // console.log(messageList);
      // console.log([...messageList, messageData]);
      setMessageList([...messageList, messageData]);
    });
  }, [socket]);

  return (
    <div className={styles.Chat}>
      <div>
        <h2 className={styles.chatHeader}>Live Chat</h2>
      </div>

      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hey..."
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={submitHandler}>Send</button>
      </div>
      <div className="chat-body">
        {messageList.map((msg, i) => {
          // return <p key={i}>{msg.message}</p>;
          return <Message key={i} userData={msg} />;
        })}
      </div>
    </div>
  );
};

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
