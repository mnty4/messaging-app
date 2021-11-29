import React from "react";
import PropTypes from "prop-types";
import styles from "./Rooms.module.css";
import Room from "../Room/Room";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Button, Container, ListGroup } from "react-bootstrap";

const Rooms = ({ rooms, refreshHandler, join, joinedRoom }) => {
  return (
    <Container className={styles.Rooms}>
      <h2>Chat Rooms</h2>
      <Button variant="outline-secondary" onClick={refreshHandler}>
        Temp Refresh
      </Button>
      {/* <img  alt="" /> */}
      <ListGroup className="mt-3">
        {rooms.map(([room, count], i) => (
          <Room
            room={room}
            count={count}
            key={i}
            join={join}
            joinedRoom={joinedRoom}
          />
        ))}
      </ListGroup>
    </Container>
  );
};

Rooms.propTypes = {};

Rooms.defaultProps = {};

export default Rooms;
