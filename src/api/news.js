import {
  NEWS_API,
} from './constants'

// eslint-disable-next-line import/prefer-default-export
export const getNews = async () => {
  try {
    const response = await fetch(NEWS_API, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const news = await response.json();
    return news
  } catch (error) {
    console.error(error);
    return []
  }
}
