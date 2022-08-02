export const ADD_NEWS = 'ADD_NEWS'

export function addNews(text) {
  return {
    type: ADD_NEWS,
    text,
  }
}
