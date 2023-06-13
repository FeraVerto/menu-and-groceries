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
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

createMock();
