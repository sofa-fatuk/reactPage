import { configureStore, combineReducers } from '@reduxjs/toolkit'
import newsReducer from './reducers/news'
import userReducer from './reducers/user'

export default configureStore({
  reducer: combineReducers({
    news: newsReducer,
    user: userReducer,
  }),
})
