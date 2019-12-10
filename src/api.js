import axios from 'axios';
import history from './history';
import {SERVER_CODES} from './constants/constants';

const createAPI = () => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onFail = (error) => {
    if (error.response.status === SERVER_CODES.unauthorized) {
      history.push(`/login`);
    }
    return error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;
