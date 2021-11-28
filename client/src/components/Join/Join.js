import React from "react";
import PropTypes from "prop-types";
import styles from "./Join.module.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
const Join = ({ joinHandler, setRoom, setUsername, room, username }) => {
  return (
    <Container className={styles.Join + " mb-4"}>
      <Form onSubmit={joinHandler} className={styles.Join}>
        <h2 className={styles.title}>Join a chat</h2>
        <Row>
          <Col lg>
            <Form.Group>
              <Form.Label>Username</Form.Label>

              <Form.Control
                required
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>
          </Col>
          <Col lg>
            <Form.Group>
              <Form.Label>Room</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setRoom(e.target.value)}
                value={room}
                onKeyPress={(e) => e.key === "Enter" && joinHandler()}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Form.Text className="text-muted">
            Enter a username and the room you wish to join or join a room
            directly below!
          </Form.Text>
        </Row>

        <Button type="submit">Join</Button>
      </Form>
    </Container>
  );
};

Join.propTypes = {};

Join.defaultProps = {};

export default Join;
