import React from 'react';
import './style/Card.css';

const Card = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  )
}

export default Card