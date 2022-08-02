import React from 'react'
import PropTypes from 'prop-types'
import classes from './style.module.css'

function Form(props) {
  const { onSubmit, elements } = props;

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {elements.map((item, index) => (
        <div className={classes.row} key={index}>
          {item}
        </div>
      ))}

    </form>
  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  elements: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default Form
