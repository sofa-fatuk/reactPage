import React from 'react'
import PropTypes from 'prop-types'
import classes from './style.module.css'

function UserBar(props) {
  const {
    src, userName, width, height,
  } = props

  return (
    <div className={classes.avatar}>
      <img className={classes.avatar__img} style={{ width, height }} src={src} alt={`post creator ${userName} avatar`} />
      <span className={classes.user__name}>{userName}</span>
    </div>
  )
}

UserBar.propTypes = {
  src: PropTypes.string,
  userName: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

UserBar.defaultProps = {
  userName: '',
  src: null,
  width: 20,
  height: 20,
}

export default UserBar
