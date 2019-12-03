import ActionType from './action-type';

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.changeCity,
    payload: city
  }),

  loadOffers: (offers) => ({
    type: ActionType.loadOffers,
    payload: offers
  }),

  authorization: (status) => ({
    type: ActionType.Authorization,
    payload: status,
  }),

  saveUserData: (data) => ({
    type: ActionType.saveUserData,
    payload: data
  }),

  toggleFavorites: (id, status) => ({
    type: ActionType.toggleFavorites,
    payload: {id, status}
  }),

  changeSortType: (type) => ({
    type: ActionType.changeSortType,
    payload: type
  }),

  setActivePin: (pin) => ({
    type: ActionType.setActivePin,
    payload: pin
  }),

  getComments: (data) => ({
    type: ActionType.getComments,
    payload: data
  })
};

export default ActionCreator;
