import React from "react";
import PropTypes from "prop-types";
import styles from "./Join.module.css";

const Join = ({ joinHandler, setRoom, setUsername }) => {
  return (
    <div className={styles.Join}>
      <form onSubmit={joinHandler} className={styles.form}>
        <h1 className="title">Join a chat</h1>
        <label className="name" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="name-input"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="room" htmlFor="room">
          Room
        </label>
        <input
          id="room"
          type="text"
          className="room-input"
          onChange={(e) => setRoom(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && joinHandler()}
        />
        <button className="join">Join</button>
      </form>
    </div>
  );
};

Join.propTypes = {};

Join.defaultProps = {};

export default Join;
