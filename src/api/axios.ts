import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.telegram.org/',
  headers: {
    'Content-Type': 'application/json',
  },
});
