const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const { getSignUpUser, db, users } = require('./helpers')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const newsRouter = require('./routes/news');

const app = express();

app.use(cors({
  origin: '*',
  optionsSuccessStatus: 200,
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/news', newsRouter);

app.post('/login', (req, res, next) => {
  try {
    const {
      userNickname,
      password,
    } = req.body

    if (userNickname === 'mr__Popug') {
      if (password !== '1234') {
        return res.status(403).send({
          errorMessage: 'Wrong password',
        });
      }
      return res.status(200).send(users[0]);
    }

    console.log(password)
    console.log(userNickname)
    if (userNickname === 'sofa_fatuk') {
      if (password !== '1234') {
        return res.status(403).send({
          errorMessage: 'Wrong password',
        });
      }
      return res.status(200).send(users[1]);
    }

    return res.status(403).send({
      errorMessage: 'Wrong password',
    });
  } catch (error) {
    console.error(error)
  }
})

app.post('/sign-up', (req, res, next) => {
  const {
    userNickname,
    password,
    repeatPassword,
  } = req.body

  if (password !== repeatPassword) {
    return res.status(403).send("Passwords doesn't match");
  }

  const { users } = db

  if (users.some((user) => user.userNickname === userNickname)) {
    return res.status(403).send('Username already taken');
  }

  const newUser = getSignUpUser(userNickname)
  users.push(newUser)

  return res.status(200).send(newUser);
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
