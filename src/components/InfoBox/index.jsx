import React from 'react'
import classes from './style.module.css'

function InfoBox(props) {
  const { item } = props

  return (
    <div className={classes.info}>
      <h4 className={classes.title}>Информейшн</h4>
      <ul className={classes.table__list}>
        <li className={classes.table__item}>
          <p className={classes.table__name}>В рейтинге</p>
          <p className={classes.table__info}>{item.mainRaiting}</p>
        </li>
        <li className={classes.table__item}>
          <p className={classes.table__name}>Зарегистрирован</p>
          <p className={classes.table__info}>{item.createdAt}</p>
        </li>
        <li className={classes.table__item}>
          <p className={classes.table__name}>Активность</p>
          <p className={classes.table__info}>{item.activeTime}</p>
        </li>
      </ul>
    </div>
  )
}



export default InfoBox
