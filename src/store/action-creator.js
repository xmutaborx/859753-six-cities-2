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
  }),

  postComments: (comment) => ({
    type: ActionType.postComments,
    payload: comment
  }),

  getFavorites: (offers) => ({
    type: ActionType.getFavorites,
    payload: offers
  }),

  clearFavoritesList: (id) => ({
    type: ActionType.clearFavoritesList,
    payload: id
  }),

};

export default ActionCreator;
