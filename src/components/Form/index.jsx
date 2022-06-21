import React from 'react';
import classes from './style.module.css';

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

// Прочитать про вывод массивов в реакте

export default Form
