import axios from 'axios';

const api = axios.create({
  baseURL: 'https://trello-api-c.herokuapp.com/',
});

export default api;
