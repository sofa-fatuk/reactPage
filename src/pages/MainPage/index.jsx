import React, { useState, useEffect } from 'react'
import classes from './style.module.css'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { getNews } from '../../api/news'

function MainPage() {
  const [news, setNews] = useState([])

  useEffect(() => {
    getNews().then((newsRes) => {
      setNews(newsRes)
    })
  }, [])

  return (
    <div className={classes.mainPage}>
      <Header />
      {news.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default MainPage
