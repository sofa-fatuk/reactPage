import { ADD_NEWS } from '../actions'

function newsReducer(state = [], action) {
  switch (action.type) {
    case ADD_NEWS:
      return state.concat({ text: action.text });
    default:
      return state
  }
}

export default newsReducer
