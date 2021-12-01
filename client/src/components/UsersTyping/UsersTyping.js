import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsersTyping.module.css';
import './3dots.css';

const UsersTyping = ({usersTyping}) => {
  

return (
    <div style={{display: 'flex', alignItems: 'center', gap: '20px', fontWeight: 600}} className='mx-1'>
      <div style={{color: '#9880ff'}}>{(() => {
        if (usersTyping.length === 1)
          return usersTyping[0].username + ' is typing'
        if (usersTyping.length === 2)
          return `${usersTyping[0].username} and ${usersTyping[1].username} are typing`
        if (usersTyping.length > 2)
          return `${usersTyping[0].username} and ${usersTyping.length - 1} others are typing`
      })()}</div>
      <div className='dot-elastic'></div>
      </div>
)}

UsersTyping.propTypes = {};

UsersTyping.defaultProps = {};

export default UsersTyping;
