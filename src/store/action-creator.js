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
};

export default ActionCreator;
