import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Messages.module.css';
import { propTypes } from 'react-bootstrap/esm/Image';
import Message from '../Message/Message';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const Messages = ({ messageList, socket }) => {

  const messagesEndRef = useRef(null);



  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    scrollToBottom();
  })

return (
  <SimpleBar className={styles.Messages + ' mt-2 p-3'}>
    {messageList.map((userData, i) => {
          return (
            <Message
              key={i}
              userData={userData}
              isSelf={socket.id === userData.id}
            />
          );
        })} 
    <div style={{ float: 'left' }} ref={messagesEndRef}></div>
  </SimpleBar>
)}

Messages.propTypes = {};

Messages.defaultProps = {};

export default Messages;
