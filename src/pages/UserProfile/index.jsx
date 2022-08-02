import React, { useState, useEffect } from 'react'
import {
  useParams,
  Link,
  useNavigate,
} from 'react-router-dom'

import Header from '../../components/Header'
import UserBar from '../../components/User'
import CreateIcon from '../../components/Svgs/CreateIcon'
import { getClassNames, getDateString, getCurrentUser } from '../../helpers'
import { getUser } from '../../api/user'

import classes from './style.module.css'

function UserProfile() {
  const [user, setUser] = useState({})
  const params = useParams()
  const navigate = useNavigate();

  const currentUser = getCurrentUser()
  const isCurrentUser = currentUser && currentUser.id === user.id

  useEffect(() => {
    getUser(params.id).then((usersRes) => {
      setUser(usersRes)
    })
  }, [params.id])
  // console.log('out', user);

  const onClickUserBar = () => {
    if (isCurrentUser) {
      navigate('/edit-profile')
    }
  }

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
                    onClick={onClickUserBar}
                    height={50}
                    width={50}
                    src={user.avatarUrl}
                  />
                  <div className={classes.user__counter}>
                    <p className={getClassNames(classes.user__karma, classes.number)}>
                      {user.karma}
                    </p>
                    <p className={getClassNames(classes.user__karma, classes.text)}>Карма</p>
                  </div>
                  <div className={classes.user__counter}>
                    <p className={getClassNames(classes.user__rating, classes.number)}>
                      {user.rating}
                    </p>
                    <p className={getClassNames(classes.user__rating, classes.text)}>Рейтинг</p>
                  </div>
                  <div className={classes.edit__img} data-title="Редактирование">
                    {isCurrentUser
                    && (
                    <Link to="/create-news">
                      <CreateIcon />
                    </Link>
                    )}
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
                    dangerouslySetInnerHTML={{ __html: user.description }}
                  />
                </div>
              </div>
            </div>
            <div className={classes.infoBox}>
              <h1 className={classes.infoBox__title}>Информейшн</h1>
              <ul className={classes.infoBox__list}>
                <li className={classes.infoBox__item}>
                  <p className={classes.infoBox__name}>В рейтинге</p>
                  <p className={classes.infoBox__info}>{`${user.mainRating}-й`}</p>
                </li>
                <li className={classes.infoBox__item}>
                  <p className={classes.infoBox__name}>Зарегистрирован</p>
                  <p className={classes.infoBox__info}>{getDateString(user.createdAt)}</p>
                </li>
                <li className={classes.infoBox__item}>
                  <p className={classes.infoBox__name}>Активность</p>
                  <p className={classes.infoBox__info}>{getDateString(user.lastActivityAt)}</p>
                </li>
              </ul>
            </div>
          </div>
        )}
    </>
  )
}

export default UserProfile
