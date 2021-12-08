import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Chat.module.css";
import Message from "../Message/Message";
import { Container, Form, InputGroup, Button } from "react-bootstrap";
import UsersTyping from "../UsersTyping/UsersTyping";
import Messages from "../Messages/Messages";

const Chat = ({ socket, username, room }) => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState('');
  const [usersTyping, setUsersTyping] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

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
  const typingHandler = (e) => {
    setMessage(e.target.value);

    if(!isTyping) {
      socket.emit('typing', {
        id: socket.id,
        username,
        room
      });
      setIsTyping(true);
      console.log('isstyping');
    }
  }

  useEffect(() => {
    socket.on("receive_message", (messageData) => {
      setMessageList((messages) => [...messages, messageData]);
    });
    socket.on("receive_typing", (userData) => {
      setUsersTyping((users) => [...users, userData]);
    });
    socket.on("receive_cancel_typing", (userData) => {
      setUsersTyping((users) => users.filter((user) => user.id !== userData.id));
    });
  }, [socket]);
  useEffect(() => {
      if(message.length === 0) {
        console.log('not typing');
        socket.emit('cancel_typing', {
          id: socket.id,
          username,
          room
        });
        setIsTyping(false);
      }
  }, [message])

  return (
    <Container className={styles.Chat}>
      <h2>{room} - Live Chat</h2>
      
<Messages messageList={messageList} socket={socket} />

      <div style={{height: '24px'}} className='mb-1'>
      {usersTyping.length > 0 && <UsersTyping usersTyping={usersTyping} /> }
      </div>
      <div className='mx-3'>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="Hey..."
          onChange={typingHandler}
          value={message}
          onKeyPress={(e) => e.key === "Enter" && submitHandler()}
        ></Form.Control>
        <Button variant="primary" onClick={submitHandler}>
          Send
        </Button>
      </InputGroup>
      </div>
    </Container>
  );
};

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;
