import React from "react";
import PropTypes from "prop-types";
import styles from "./Message.module.css";
import { Card } from "react-bootstrap";

const Message = ({ userData, isSelf }) => {
  return (
    <Card
      className="mb-2 px-2"
      style={
        isSelf
          ? { alignSelf: "flex-end", width: "60%" }
          : { alignSelf: "flex-start", width: "60%" }
      }
    >
      <Card.Text className={styles.MessageMeta} style={{ textAlign: "end" }}>
        {isSelf ? "me" : userData.username} - {userData.time}
      </Card.Text>

      <Card.Title style={{ textAlign: "start" }}>{userData.message}</Card.Title>
    </Card>
  );
};

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
