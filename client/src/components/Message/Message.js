import React from "react";
import PropTypes from "prop-types";
import styles from "./Message.module.css";

const Message = ({ userData, isSelf }) => {
  return (
    <div
      className={styles.Message}
      style={isSelf ? { alignSelf: "flex-start" } : { alignSelf: "flex-end" }}
    >
      <p className={styles.MessageMeta}>
        {isSelf ? "me" : userData.username} - {userData.time}
      </p>
      <p className={styles.MessageText}>{userData.message}</p>
    </div>
  );
};

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
