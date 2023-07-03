import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1337',
});

instance.interceptors.request.use(config => {
  const token = JSON.parse(localStorage.getItem('USER'))?.jwt;

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

export default {
  install(app) {
    app.config.globalProperties.$axios = instance;
  }
};
