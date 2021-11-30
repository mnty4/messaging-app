import React from "react";
import PropTypes from "prop-types";
import styles from "./Rooms.module.css";
import Room from "../Room/Room";
import { ArrowClockwise } from 'react-bootstrap-icons';
import { Container, ListGroup } from "react-bootstrap";

const Rooms = ({ rooms, refreshHandler, join, joinedRoom, onlineTotal, wheelIsGrey }) => {
  return (
    <Container className={styles.Rooms}>
      
      <h2>Chat Rooms</h2>
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1em'}}>
        <div style={{backgroundColor: 'green', width: '10px', height: '10px', borderRadius: '50%'}}></div>
        <div style={{color: 'green'}}>{`${onlineTotal} User${onlineTotal !== 1 ? "'s" : ''} Online`}</div>
        
      <ArrowClockwise size={32} onClick={refreshHandler} style={wheelIsGrey ? {color: 'grey'} : {cursor: 'pointer'}} className='mt-1'/>
      </div>
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
