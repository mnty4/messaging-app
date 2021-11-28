import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Room.module.css";
import { ListGroupItem, Button } from "react-bootstrap";
const Room = ({ room, count, join, joinedRoom }) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(joinedRoom === room);
  }, [joinedRoom, room]);

  return (
    <ListGroupItem className="pb-3 pt-3">
      <div className={styles.Room}>
        <b>{room}</b>
        <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
          <div>{count}/300</div>
          <Button
            disabled={disabled}
            onClick={() => {
              join(room);
            }}
          >
            Join
          </Button>
        </div>
      </div>
    </ListGroupItem>
  );
};

Room.propTypes = {};

Room.defaultProps = {};

export default Room;
