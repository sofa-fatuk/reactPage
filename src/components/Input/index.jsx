import React from 'react'
import PropTypes from 'prop-types'
import classes from './style.module.css'

function Input(props) {
  const {
    className, hasError, errorMessage, ...rest
  } = props;

  const getInputClassName = () => {
    if (className) {
      return `${className} ${classes.input}`
    }
    return classes.input
  }

  return (
    <label>
      <input
        className={getInputClassName()}
        {...rest}
      />
      {hasError && <span>{errorMessage}</span>}
    </label>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
}

Input.defaultProps = {
  className: '',
  hasError: false,
  errorMessage: '',
}

export default Input;
