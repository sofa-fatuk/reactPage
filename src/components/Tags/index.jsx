import React from 'react'
import { TAGS_PROP_TYPE } from '../../helpers/propTypes'
import classes from './style.module.css'

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

Tags.propTypes = {
  tags: TAGS_PROP_TYPE.isRequired,
}

export default Tags
