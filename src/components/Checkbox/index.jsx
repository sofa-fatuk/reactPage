import React from 'react'
import PropTypes from 'prop-types'
import classes from './style.module.css'

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

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.bool.isRequired,
}

export default Checkbox;
