import ActionCreator from './action-creator';
import history from '../history';

const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        const initialCity = response.data[0].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
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
          dispatch(ActionCreator.authorization(true));
          history.push(`/`);
        }
      });
  },

  toggleFavorites: (id, status) => (dispatch, _, api) => {
    return api.post(`/favorite/${id}/${status ? 1 : 0}`)
      .then(() => {
        dispatch(ActionCreator.toggleFavorites(id, status));
      });
  },

};

export default Operation;
