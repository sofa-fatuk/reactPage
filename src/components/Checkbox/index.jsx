import React from 'react';
import classes from './style.module.css';

function Checkbox(props) {
  const { onChange, value } = props;

  return (
    <label className={classes.checkbox}>
      <input
        value={value}
        type="checkbox"
        onChange={onChange}
      />
      <span className={classes.text}>Remember me</span>
    </label>
  )
}

export default Checkbox;
