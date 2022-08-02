const { faker } = require('@faker-js/faker');

const initialUsers = [
  {
    id: '89bd9d8d-69a6-474e-8f46-7cc8796ed151',
    avatarUrl: 'https://www.bluenote.com/files/2021/05/JamesFrancies_9578wide_byShervinLainez.jpg',
    userName: 'mr__Popug',
    userNickname: 'Popug',
    tags: [
      {
        value: 'tag_1',
        color: 'gray',
      },
    ],
    createdAt: '2010-01-06T14:48:00.000Z',
    lastActivityAt: '2022-06-23T10:40:00.000Z',
    rating: 999,
    karma: 999,
    mainRating: 999,
    description: 'Some',
  },
  {
    id: '4136cd0b-d90b-4af7-b485-5d1ded8db252',
    avatarUrl: 'https://habrastorage.org/getpro/habr/avatars/f55/eba/556/f55eba556d44f143a2af69452d2c2d03.png',
    userName: 'sofa_fatuk',
    userNickname: 'Сookie',
    tags: [
      {
        value: 'tag_1',
        color: 'gray',
      },
    ],
    createdAt: '2010-01-06T14:48:00.000Z',
    lastActivityAt: '2022-06-23T10:40:00.000Z',
    rating: 54.5,
    karma: 143,
    mainRating: 32,
    description: 'Занимаюсь разрушением замков и человеческих судеб, профессионально',
  }
]
const users = [...initialUsers, ...new Array(100).fill(null).map(getUser)]
const news = new Array(100).fill(null).map(getNews)

const getSignUpUser = (userNickname) => {
  const createdAt = new Date().toISOString()

  return {
    id: faker.datatype.uuid(),
    avatarUrl: null,
    userName: null,
    userNickname: userNickname,
    tags: [],
    createdAt,
    lastActivityAt: createdAt,
    rating: 0,
    karma: 0,
    mainRating: 0,
    description: null,
  }
}

function getTag() {
  return {
    value: faker.word.adjective(),
    color: faker.color.human(),
  }
}

function getTags() {
  const count = faker.datatype.number({min: 0, max: 10, precision: 1})
  return new Array(count).fill(null).map(getTag)
}

function getUser(userNickname) {
  return ({
    id: faker.datatype.uuid(),
    avatarUrl: faker.internet.avatar(),
    userName: faker.name.findName(),
    userNickname: userNickname || faker.internet.userName(),
    tags: getTags(),
    createdAt: faker.date.past(),
    lastActivityAt: faker.date.recent(),
    rating: faker.datatype.number({min: 10, max: 100, precision: 0.01}),
    karma: faker.datatype.number({min: 10, max: 100, precision: 0.01}),
    mainRating: faker.datatype.number({min: 10, max: 100, precision: 0.01}),
    description: faker.lorem.text(),
  })
}

function getNews() {
  const randomUserIndex = Math.floor(Math.random() * users.length)
  const creator = users[randomUserIndex]

  return ({
    id: faker.datatype.uuid(),
    creator,
    createdAt: faker.date.recent(),
    title: faker.word.adjective(),
    tags: getTags(),
    text: faker.lorem.paragraphs(10),
    likes: faker.datatype.number({min: 10, max: 100, precision: 1}),
    bookmarks: faker.datatype.number({min: 10, max: 100, precision: 1}),
    views: faker.datatype.number({min: 10, max: 100, precision: 1}),
  })
}

function createNews({
  userNickname,
  title,
  tags,
  text,
}) {
  return {
    id: faker.datatype.uuid(),
    creator: getUser(userNickname),
    createdAt: new Date().toISOString(),
    title,
    tags,
    text,
    likes: 0,
    bookmarks: 0,
    views: 0,
  }
}

const mockDB = {
  news,
  users,
}

module.exports = {
  users,
  getTag,
  getTags,
  getUser,
  getNews,
  getSignUpUser,
  createNews,
  db: mockDB,
}
