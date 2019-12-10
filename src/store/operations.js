import ActionCreator from './action-creator';
import {batch} from 'react-redux';
import history from '../history';
import {SERVER_CODES} from '../constants/constants';

const Operations = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then(({data}) => {
        dispatch(ActionCreator.loadOffers(data));
        const randomCity = Math.floor(Math.random() * (data.length - 1)) + 1;
        const initialCity = data[randomCity].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
      });
  },

  getComments: (id) => (dispatch, _, api) => {
    return api.get(`/comments/${id}`)
      .then(({data}) => {
        dispatch(ActionCreator.getComments(data));
      });
  },

  getFavorites: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        dispatch(ActionCreator.getFavorites(data));
      });
  },

  toggleFavorites: (id, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${id}/${status ? 1 : 0}`)
      .then((response) => {
        if (response.status === SERVER_CODES.ok) {
          batch(() => {
            dispatch(ActionCreator.toggleFavorites(id, status));
            dispatch(ActionCreator.clearFavoritesList(id));
          });
        } else {
          history.push(`/login`);
        }
      });
  },

  authorization: (email, password) => (dispatch, _, api) => {
    return api.post(`/login`, {
      email,
      password
    })
      .then((response) => {
        if (response.status === SERVER_CODES.ok) {
          dispatch(ActionCreator.saveUserData(response.data));
          history.push(`/`);
        }
      });
  },

  postComments: (id, rating, comment) => (dispatch, _, api) => {
    return api.post(`/comments/${id}`, {rating, comment})
      .then((response) => {
        if (response.status === SERVER_CODES.ok) {
          dispatch(ActionCreator.postComments(response.data));
        }
      });
  },

};

export default Operations;
