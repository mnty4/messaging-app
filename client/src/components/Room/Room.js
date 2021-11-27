import React from "react";
import PropTypes from "prop-types";
import styles from "./Room.module.css";
import { ListGroupItem } from "react-bootstrap";
const Room = ({ room, count }) => (
  <ListGroupItem className="pb-3 pt-3">
    <div className={styles.Room}>
      <b>{room}</b>
      <div>{count}/300</div>
    </div>
  </ListGroupItem>
);

Room.propTypes = {};

Room.defaultProps = {};

export default Room;
