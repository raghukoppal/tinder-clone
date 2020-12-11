import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rktinder-backend.herokuapp.com/',
});

export default instance;
