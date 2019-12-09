import ActionCreator from './action-creator';
import {batch} from 'react-redux';
import history from '../history';

const Operations = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        const initialCity = response.data[0].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
      });
  },

  getComments: (id) => (dispatch, _, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.getComments(response.data));
      });
  },

  getFavorites: () => (dispatch, _, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.getFavorites(response.data));
      });
  },

  toggleFavorites: (id, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${id}/${status ? 1 : 0}`)
      .then((response) => {
        if (response.status === 200) {
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
        if (response.status === 200) {
          dispatch(ActionCreator.saveUserData(response.data));
          history.push(`/`);
        }
      });
  },

  postComments: (id, rating, comment) => (dispatch, _, api) => {
    return api.post(`/comments/${id}`, {rating, comment})
      .then((response) => {
        if (response.status === 200) {
          dispatch(ActionCreator.postComments(response.data));
        }
      });
  },

};

export default Operations;
