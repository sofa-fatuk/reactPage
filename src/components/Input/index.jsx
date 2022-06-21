import React from 'react';
import classes from './style.module.css';

function Input(props) {
  // console.log(props);
  const {
    className, hasError, errorMessage, ...rest
  } = props;

  const getInputClassName = () => {
    if (className) {
      // return className + ' ' + classes.input
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

export default Input;
