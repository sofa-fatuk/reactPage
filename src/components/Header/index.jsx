import React from 'react'
import SearchIcon from '../SvgIcons/Search'
import UserIcon from '../SvgIcons/User'
import classes from './style.module.css'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <a href="/main-page" className={classes.logo}>
          <h1 className={classes.logo__title}>Home</h1>
        </a>
        <div className={classes.search}>
          <div className={classes.search__img}>
            <SearchIcon />
          </div>
          <div className={classes.user__img}>
            <UserIcon />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
