import ActionCreator from './action-creator';

export const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        console.log(response)
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
        }
      });
  }
};
