import React from 'react'
import PropTypes from 'prop-types'
import classes from './style.module.css'

function UserBar(props) {
  const {
    src, userName, width, height, onClick,
  } = props

  return (
    <div role="button" tabIndex="0" className={classes.avatar} onKeyDown={onClick} onClick={onClick}>
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
  onClick: PropTypes.func,
}

UserBar.defaultProps = {
  userName: '',
  src: null,
  width: 20,
  height: 20,
  onClick: () => {},
}

export default UserBar
