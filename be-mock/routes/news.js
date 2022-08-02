const express = require('express');
const router = express.Router();

const { createNews, db } = require('../helpers')

router.get('/', function (req, res, next) {
  const { page = 0 } = req.query
  const { news } = db

  const newsOnPage = 10
  const start = page * newsOnPage
  const end = start + newsOnPage

  const paginatedNews = news.slice(start, end)

  return res.status(200).send(paginatedNews)
});

router.get('/:id', function (req, res, next) {
  const { id } = req.params

  if (!id) {
    return res.status(404).send('News id required')
  }
  const { news } = db
  const requestedNews = news.find(item => item.id === id)

  return res.status(200).send(requestedNews)
});

router.post('/', function (req, res, next) {
  const {
    userNickname,
    title,
    tags,
    text,
  } = req.body

  if (!userNickname || !title || !tags || !text) {
    return res.status(403).send('Request body is incorrect')
  }

  const createdNews = createNews({
    userNickname,
    title,
    tags,
    text,
  })

  const { news } = db
  news.push(createdNews)

  return res.status(200).send(createdNews)
});

module.exports = router;
