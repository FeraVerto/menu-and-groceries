//libraries
import axios from 'axios';
import { createMock } from '../mocks/mocks';

export const instanceTelegram = axios.create({
  baseURL: 'https://api.telegram.org/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const instance = axios.create({
  // baseURL: 'https://menu-and-groceries.com/',
  withCredentials: true,
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// createMock();

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log('error.response.status', error.response.status);
      try {
        await instance.get('/auth/refresh', { withCredentials: true });
        return instance(error.config);
      } catch (refreshError) {
        //ошибка: токен не обновлен
      }
    }
    return Promise.reject(error);
  }
);
