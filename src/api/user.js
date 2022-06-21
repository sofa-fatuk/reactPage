import {
  USER_API
} from './constants'

export const signUpUser = async (data) => {
  try {
    const response = await fetch(USER_API, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const user = await response.json();
    return user
 
  } catch (error) {
    console.error(error);
  }
}

export const signInUser = async (data) => {
  try {
    const response = await fetch(USER_API, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const user = await response.json();
    return user

  } catch (error) {
    console.error('Ошибка:', error);
  }
}

