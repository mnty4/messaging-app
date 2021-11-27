import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Chat.module.css";
import Message from "../Message/Message";
import { Container, Form, InputGroup, Button } from "react-bootstrap";

const Chat = ({ socket, username, room }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const submitHandler = async (e) => {
    e && e.preventDefault();
    if (message.length < 1) return;

    const messageData = {
      id: socket.id,
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

    setMessageList((messages) => [...messages, messageData]);
    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (messageData) => {
      setMessageList((messages) => [...messages, messageData]);
    });
  }, [socket]);

  return (
    <Container className={styles.Chat}>
      <h2>{room} - Live Chat</h2>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Ur mum..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          onKeyPress={(e) => e.key === "Enter" && submitHandler()}
        ></Form.Control>
        <Button variant="primary" onClick={submitHandler}>
          Send
        </Button>
      </InputGroup>
      <div className={styles.messages}>
        {messageList.map((userData, i) => {
          return (
            <Message
              key={i}
              userData={userData}
              isSelf={socket.id === userData.id}
            />
          );
        })}
      </div>
    </Container>

    // <div className={styles.Chat}>
    //   <div>
    //     <h2 className={styles.chatHeader}>{room} - Live Chat</h2>
    //   </div>

    //   <div className="chat-footer">
    //     <input
    //       type="text"
    //       placeholder="Hey..."
    // onChange={(e) => setMessage(e.target.value)}
    // value={message}
    // onKeyPress={(e) => e.key === "Enter" && submitHandler()}
    //     />
    // <button onClick={submitHandler}>Send</button>
    //   </div>
    //   <div className={styles.chatBody}>
    // {messageList.map((userData, i) => {
    //   return (
    //     <Message
    //       key={i}
    //       userData={userData}
    //       isSelf={socket.id === userData.id}
    //         />
    //       );
    //     })}
    //   </div>
    // </div>
  );
};

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
