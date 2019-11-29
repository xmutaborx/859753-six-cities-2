import axios from 'axios';
import history from './history';

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 401) {
      // history.push('/login');
      return;
    }

    return Promise.reject(err);
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
