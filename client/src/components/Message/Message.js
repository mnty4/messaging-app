import React from "react";
import PropTypes from "prop-types";
import styles from "./Message.module.css";

const Message = ({ userData }) => (
  <div
    className={styles.Message}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      margin: "10px 0 10px 0",
      padding: "10px",
      width: "18em",
      textAlign: "left",
      gap: "10px",
    }}
  >
    <p style={{ margin: "0" }}>
      {userData.username} - {userData.time}
    </p>
    <p style={{ margin: "0", fontSize: "16px", fontWeight: "bold" }}>
      {userData.message}
    </p>
  </div>
);

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
