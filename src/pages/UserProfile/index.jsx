import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import UserBar from '../../components/User'
import { getClassNames, getDateString } from '../../helpers'
import classes from './style.module.css'

const getUser = (id) => id === 'sofa' && ({
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
  raitingCounter: 54.5,
  karmaCounter: 143,
  mainRaiting: 32,
  text: 'Занимаюсь разрушением замков и человеческих судеб, профессионально',
})

function UserProfile() {
  const params = useParams()
  // запрос к BE (как бы)
  const user = getUser(params.id)

  // Добавить проверку, если юзер из getUser совпадает с юзером из localStorage
  // то добавить карандаш, он ведет на новую страницу с формой информации о себе

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
                    <p className={getClassNames(classes.user__raiting, classes.number)}>
                      {user.raitingCounter}
                    </p>
                    <p className={getClassNames(classes.user__raiting, classes.text)}>Рейтинг</p>
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
            <div className={classes.info}>
              <h4 className={classes.info__title}>Информейшн</h4>
              <ul className={classes.table__list}>
                <li className={classes.table__item}>
                  <p className={classes.table__name}>В рейтинге</p>
                  <p className={classes.table__info}>{`${user.mainRaiting}-ой`}</p>
                </li>
                <li className={classes.table__item}>
                  <p className={classes.table__name}>Зарегистрирован</p>
                  <p className={classes.table__info}>{getDateString(user.createdAt)}</p>
                </li>
                <li className={classes.table__item}>
                  <p className={classes.table__name}>Активность</p>
                  <p className={classes.table__info}>{getDateString(user.activeTime)}</p>
                </li>
              </ul>
            </div>
          </div>
        )}
    </>
  )
}

export default UserProfile
