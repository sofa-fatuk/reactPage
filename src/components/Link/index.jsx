import React from 'react';
import classes from './style.module.css';

function Link(props) {
  const { text, href } = props;

  return (
    <label>
      <a href={href} className={classes.link}>
        {text}
      </a>
    </label>
  )
}

export default Link
