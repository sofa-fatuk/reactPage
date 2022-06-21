import React from 'react';
import classes from './style.module.css';

function Button(props) {
  const { value, onClick, type } = props;

  return (
    <div className="container">
      <input
        className={classes.btn}
        type={type}
        value={value}
        onClick={onClick}
      />
    </div>
  )
}

export default Button;
