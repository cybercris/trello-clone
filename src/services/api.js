import axios from 'axios';

const api = axios.create({
  baseURL: 'http://trello-api-c.herokuapp.com/',
});

export default api;
