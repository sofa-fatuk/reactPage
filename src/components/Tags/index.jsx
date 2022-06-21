import React from 'react';
import classes from './style.module.css';

function Tags(props) {
  const { tags } = props

  return (
    <div className={classes.card__tags}>
      {tags.map((tag) => (
        <span key={tag.value}>{tag.value}</span>
      ))}
    </div>
  )
}

export default Tags
