import React from "react";
import PropTypes from "prop-types";
import styles from "./Rooms.module.css";
import Room from "../Room/Room";
import { Button, Container, ListGroup } from "react-bootstrap";

const Rooms = ({ rooms, refreshHandler }) => {
  return (
    <Container className={styles.Rooms}>
      <h2>Chat Rooms</h2>
      <Button variant="outline-secondary">Temp Refresh</Button>
      <ListGroup className="mt-3">
        {rooms.map(([room, count], i) => (
          <Room room={room} count={count} key={i} />
        ))}
      </ListGroup>
    </Container>
  );
};

Rooms.propTypes = {};

Rooms.defaultProps = {};

export default Rooms;
