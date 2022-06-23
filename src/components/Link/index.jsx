import React from 'react'
import PropTypes from 'prop-types'
import classes from './style.module.css'

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

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
}

Link.defaultProps = {
  href: '#',
}

export default Link
