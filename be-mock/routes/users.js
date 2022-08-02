const express = require('express');
const router = express.Router();

const { db } = require('../helpers')

router.get('/', function(req, res, next) {
  const { users } = db
  return res.status(200).send(users);
});

router.get('/:id', function(req, res, next) {
  const { id: userNickname } = req.params

  if (!userNickname) {
    return res.status(404).send('User nickname required')
  }
  const { users } = db
  const requestedUser = users.find(item => item.userNickname === userNickname)

  if (!requestedUser) {
    return res.status(404).send('No such user')
  }

  return res.status(200).send(requestedUser)
});

router.patch('/:id', function(req, res, next) {
  const { id: userNickname } = req.params
  const {
    avatarUrl = null,
    userName = null,
    description = null,
  } = req.body

  if (!userNickname) {
    return res.status(403).send('User nickname required')
  }

  const { users } = db

  let existedUserIndex
  const existedUser = users.find((user, index) => {
    const match = user.userNickname === userNickname
    if (match) {
      existedUserIndex = index
    }
    return match
  })

  if (!existedUser) {
    return res.status(403).send('No such user')
  }

  const updatedUser = {
    ...existedUser,
    avatarUrl: avatarUrl,
    userName,
    description,
  }
  users[existedUserIndex] = updatedUser

  return res.status(200).send(updatedUser);
});

module.exports = router;
