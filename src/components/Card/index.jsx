import React from 'react'

import { Link } from 'react-router-dom'
import Button from '../Button'
import UserBar from '../User'
import Tags from '../Tags'
import { getDateString } from '../../helpers'

import classes from './style.module.css'
import { NEWS_PROP_TYPE } from '../../helpers/propTypes'

function Card(props) {
  const { item } = props

  if (!item) return null

  const {
    creator, createdAt, tags, text, title,
  } = item

  // console.log(creator);

  return (
    <section className={classes.card}>
      <div className={classes.article}>
        <div className={classes.userBar}>
          <Link to={`/users/${creator.userNickname}`}>
            <div className={classes.avatar}>
              <UserBar
                src={creator.avatarUrl}
                userName={creator.userName}
              />
              <span className={classes.time}>{getDateString(createdAt)}</span>
            </div>
          </Link>
        </div>
        <div className={classes.card__content}>
          <h2 className={classes.card__title}>{title}</h2>
          <Tags
            tags={tags}
          />
          <div className={classes.card__text} dangerouslySetInnerHTML={{ __html: text }} />
          <div className={classes.card__btn}>
            <Button
              value="Читать далее"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

Card.propTypes = {
  item: NEWS_PROP_TYPE.isRequired,
}

export default Card
