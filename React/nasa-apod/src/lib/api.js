import axios from 'axios';

export function getAPOP(date = '') {
  return axios.get(`url=${date}`);
}