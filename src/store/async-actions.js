import ActionCreator from './action-creator';

export const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(response.data));
        const initialCity = response.data[0].city.name;
        dispatch(ActionCreator.changeCity(initialCity));
      });
  }
};
