import React from 'react'
import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import UserBar from '../../components/User'
import EditIcon from '../../components/Svgs/Edit'
import { getClassNames, getDateString, getCurrentUser } from '../../helpers'

import classes from './style.module.css'

const getUser = (id) => (id === 'sofa' || id === 'alex') && ({
  id,
  avatarUrl: 'https://habrastorage.org/getpro/habr/avatars/f55/eba/556/f55eba556d44f143a2af69452d2c2d03.png',
  userName: 'mr__Popug96',
  userNickname: 'Сookie',
  tags: [
    {
      value: 'tag_1',
      color: 'gray',
    },
  ],
  createdAt: '2010-01-06T14:48:00.000Z',
  activeTime: '2022-06-23T10:40:00.000Z',
  ratingCounter: 54.5,
  karmaCounter: 143,
  mainRaiting: 32,
  text: 'Занимаюсь разрушением замков и человеческих судеб, профессионально',
})

function UserProfile() {
  const params = useParams()
  const user = getUser(params.id)
  const currentUser = getCurrentUser()
  const showEdit = currentUser.id === user.id
  // взять текущего юзера из localStorage
  // сравнить его с юзером страницы
  return (
    <>
      <Header />
      {!user
        ? <div>Пользователя неть</div>
        : (
          <div className={classes.userPage}>
            <div className={classes.container}>
              <div className={classes.user}>
                <div className={classes.avatar}>
                  <UserBar
                    height={50}
                    width={50}
                    src={user.avatarUrl}
                  />
                  <div className={classes.user__counter}>
                    <p className={getClassNames(classes.user__karma, classes.number)}>
                      {user.karmaCounter}
                    </p>
                    <p className={getClassNames(classes.user__karma, classes.text)}>Карма</p>
                  </div>
                  <div className={classes.user__counter}>
                    <p className={getClassNames(classes.user__rating, classes.number)}>
                      {user.ratingCounter}
                    </p>
                    <p className={getClassNames(classes.user__rating, classes.text)}>Рейтинг</p>
                  </div>
                  <div className={classes.edit__img}>
                    {showEdit && <EditIcon />}
                  </div>
                </div>
                <div className={classes.nameBar}>
                  <h2 className={classes.user__name}>{user.userName}</h2>
                  <span className={getClassNames(classes.user__name, classes.nickname)}>
                    {user.userNickname}
                  </span>
                </div>
                <div className={classes.user__about}>
                  <h4>О себе:</h4>
                  <div
                    className={classes.user__text}
                    dangerouslySetInnerHTML={{ __html: user.text }}
                  />
                </div>
              </div>
            </div>
            <div className={classes.infoBox}>
              <div className={classes.infoBox__title}>
                <span>Информейшн</span>
              </div>
              <ul className={classes.infoBox__list}>
                <li className={classes.infoBox__item}>
                  <p className={classes.infoBox__name}>В рейтинге</p>
                  <p className={classes.infoBox__info}>{`${user.mainRaiting}-ой`}</p>
                </li>
                <li className={classes.infoBox__item}>
                  <p className={classes.infoBox__name}>Зарегистрирован</p>
                  <p className={classes.infoBox__info}>{getDateString(user.createdAt)}</p>
                </li>
                <li className={classes.infoBox__item}>
                  <p className={classes.infoBox__name}>Активность</p>
                  <p className={classes.infoBox__info}>{getDateString(user.activeTime)}</p>
                </li>
              </ul>
            </div>
          </div>
        )}
    </>
  )
}

export default UserProfile
