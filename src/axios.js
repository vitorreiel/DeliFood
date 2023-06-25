import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1337',
  // headers: {
  //   common: {
  //     'Authorization': 'Bearer your-token'
  //   }
  // }
});

export default {
  install(app) {
    app.config.globalProperties.$axios = instance;
  }
};
