import axios from 'axios';

const service = axios.create({
  baseURL: 'https://api.github.com',
});

const errorHandler = err => {
  throw err;
};

export default {
  service
}