import React from "react";
import PropTypes from "prop-types";
import styles from "./Join.module.css";
import { Form, Button, Col, Row, Container } from "react-bootstrap";
const Join = ({ joinHandler, setRoom, setUsername, room, username }) => {
  return (
    <Container className={styles.Join}>
      <Form onSubmit={joinHandler} className={styles.Join}>
        <h2 className={styles.title}>Join a chat</h2>
        <Row>
          <Col md>
            <Form.Group>
              <Form.Label>Username</Form.Label>

              <Form.Control
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </Form.Group>
          </Col>
          <Col md>
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
          <Form.Text className="text-muted">You are retarded</Form.Text>
        </Row>

        <Button type="submit">Join</Button>
      </Form>
    </Container>
  );
};

Join.propTypes = {};

Join.defaultProps = {};

export default Join;
