import React from 'react'
import classes from './style.module.css'
import Header from '../../components/Header'
import Card from '../../components/Card'

const newsArray = [{
  id: 1,
  creator: {
    id: 'sofa',
    avatarUrl: 'https://habrastorage.org/getpro/habr/avatars/f55/eba/556/f55eba556d44f143a2af69452d2c2d03.png',
    userName: 'mr__Popug96',
  },
  createdAt: '2011-10-05T14:48:00.000Z',
  title: 'Активность найма на ИТ-рынке в мае 2022',
  tags: [
    {
      value: 'tag_1',
      color: 'gray',
    },
    {
      value: 'tag_2',
      color: 'gray',
    },
    {
      value: 'tag_3',
      color: 'gray',
    },
  ],
  text: "В марте этого года мы исследовали актуальную ситуацию на ИТ-рынке —  разбирались, что происходит с наймом и сокращениями. Тогда 32% опрошенных рассказали, что их компания <a style='color: #7079b4' href='https://google.com'>остановила</a> или уменьшила наем новых сотрудников. <br /><br /> Делаем еще один срез — спустя три месяца. Мы посмотрели, сколько в мае размещалось вакансий и какие организации нанимали активнее остальных. Так у нас получился рейтинг компаний по количеству вакансий на Хабр Карьере в мае. ",
  likes: 66,
  bookmarks: 45,
  views: 105,
},
{
  id: 2,
  creator: {
    id: 'qweqwe',
    avatarUrl: 'https://habrastorage.org/getpro/habr/avatars/f55/eba/556/f55eba556d44f143a2af69452d2c2d03.png',
    userName: 'Sofi__Loren98',
  },
  createdAt: '2011-08-10T06:10:00.000Z',
  title: 'Активность найма на ИТ-рынке в мае 2022',
  tags: [
    {
      value: 'tag_1',
      color: 'gray',
    },
    {
      value: 'tag_2',
      color: 'gray',
    },
    {
      value: 'tag_3',
      color: 'gray',
    },
  ],
  text: "В марте этого года мы исследовали актуальную ситуацию на ИТ-рынке —  разбирались, что происходит с наймом и сокращениями. Тогда 32% опрошенных рассказали, что их компания <a style='color: #7079b4' href='https://google.com'>остановила</a> или уменьшила наем новых сотрудников. <br /><br /> Делаем еще один срез — спустя три месяца. Мы посмотрели, сколько в мае размещалось вакансий и какие организации нанимали активнее остальных. Так у нас получился рейтинг компаний по количеству вакансий на Хабр Карьере в мае. ",
  likes: 66,
  bookmarks: 45,
  views: 105,
},
]

function MainPage() {
  return (
    <div className={classes.mainPage}>
      <Header />
      {newsArray.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </div>
  )
}

export default MainPage
