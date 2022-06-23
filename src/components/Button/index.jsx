import React from 'react'
import PropTypes from 'prop-types'
import classes from './style.module.css'

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

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
}

export default Button;
