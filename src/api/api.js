import axios from 'axios';
import mock from './mock';

mock(true);

/**
 * Api constructor
 * @type {Axios.create}
 */
const Api = () => {
  const instance = axios.create({
    baseURL: 'https://api.dept.com',
  });

  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        return Promise.reject();
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

export default Api;
