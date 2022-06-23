import React from 'react'
import Header from '../../components/Header'
import UserBar from '../../components/User'
import { getClassNames } from '../../helpers'
import classes from './style.module.css'

function UserProfile() {
  return (
    <div>
      <Header />
      <div className={classes.userPage}>
        <div className={classes.container}>
          <div className={classes.user}>
            <div className={classes.avatar}>
              <UserBar
                height={50}
                width={50}
                src="https://habrastorage.org/getpro/habr/avatars/f55/eba/556/f55eba556d44f143a2af69452d2c2d03.png"
              />
              <div className={classes.user__counter}>
                <p className={getClassNames(classes.user__karma, classes.number)}>143</p>
                <p className={getClassNames(classes.user__karma, classes.text)}>Карма</p>
              </div>
              <div className={classes.user__counter}>
                <p className={getClassNames(classes.user__raiting, classes.number)}>54.5</p>
                <p className={getClassNames(classes.user__raiting, classes.text)}>Рейтинг</p>
              </div>
            </div>
            <div className={classes.nameBar}>
              <h2 className={classes.user__name}>Sofi__Loren98</h2>
              <span className={getClassNames(classes.user__name, classes.nickname)}>Сookie</span>
            </div>
            <div className={classes.user__about}>
              <h4>О себе:</h4>
              <p>
                Занимаюсь разрушением замков и человеческих судеб, профессионально
              </p>
            </div>
          </div>
        </div>
        <div className={classes.info}>
          <h4 className={classes.title}>Информейшн</h4>
          <ul className={classes.table__list}>
            <li className={classes.table__item}>
              <p className={classes.table__name}>В рейтинге</p>
              <p className={classes.table__info}>36-й</p>
            </li>
            <li className={classes.table__item}>
              <p className={classes.table__name}>Зарегистрирован</p>
              <p className={classes.table__info}>6 января 2010</p>
            </li>
            <li className={classes.table__item}>
              <p className={classes.table__name}>Активность</p>
              <p className={classes.table__info}>сегодня в 13:29</p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default UserProfile
