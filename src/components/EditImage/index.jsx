import React from 'react'
import PropTypes from 'prop-types'

import classes from './style.module.css'

function EditImage(props) {
  const { src, onChange } = props

  return (
    <div>
      <label className={classes.avatar}>
        <img
          alt=""
          src={src}
          className={classes.img}
        />
        <input
          className={classes.browse}
          name="userAvatar"
          onChange={onChange}
          type="file"
          accept="image/*"
        />
      </label>
    </div>
  )
}

EditImage.propTypes = {
  src: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

EditImage.defaultProps = {
  src: null,
}

export default EditImage
