import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '../SvgIcons/Search'
import UserIcon from '../SvgIcons/User'
import classes from './style.module.css'
import { getCurrentUser } from '../../helpers'

function Header() {
  const user = getCurrentUser()

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Link to="/main-page">
          <span className={classes.logo}>
            <h1 className={classes.logo__title}>Home</h1>
          </span>
        </Link>
        <div className={classes.search}>
          <div className={classes.search__img}>
            <SearchIcon />
          </div>
          <div className={classes.user__img}>
            <Link to={`/users/${user.id}`}>
              <UserIcon />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
