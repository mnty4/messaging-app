import React from "react";
import PropTypes from "prop-types";
import styles from "./Message.module.css";
import { Card } from "react-bootstrap";

const Message = ({ userData, isSelf }) => {
  return (
    <Card
      className={"mb-2 px-2 py-1 " + (isSelf && "bg-primary")}
      style={
        isSelf
          ? { alignSelf: "flex-end", width: "60%", color: "#FFF"}
          : { alignSelf: "flex-start", width: "60%" }
      }
    >
      <Card.Text className={styles.MessageMeta + ' mb-2'} style={{ textAlign: "start" }}>
        {isSelf ? "me" : userData.username} - {userData.time}
      </Card.Text>
      <Card.Text style={{ textAlign: "start" }}>
      {userData.message}
      </Card.Text >
    </Card>
  );
};

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
