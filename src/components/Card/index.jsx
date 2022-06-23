import React from 'react'
import Button from '../Button'
import UserBar from '../User'
import Tags from '../Tags'
import classes from './style.module.css'
import { getDateString } from '../../helpers'
import { NEWS_PROP_TYPE } from '../../helpers/propTypes'

// var PropTypes = require('prop-types');

function Card(props) {
  const { item } = props

  if (!item) {
    return null
  }

  return (
    <section className={classes.card}>
      <div className={classes.article}>
        <div className={classes.userBar}>
          <div className={classes.avatar}>
            <UserBar
              src={item.creator.avatarUrl}
              userName={item.creator.userName}
            />
            <span className={classes.time}>{getDateString(item.createdAt)}</span>
          </div>
        </div>
        <div className={classes.card__content}>
          <h2 className={classes.card__title}>{item.title}</h2>
          <Tags
            tags={item.tags}
          />
          <div className={classes.card__text} dangerouslySetInnerHTML={{ __html: item.text }} />
          <div className={classes.card__btn}>
            <Button
              type="submit"
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
