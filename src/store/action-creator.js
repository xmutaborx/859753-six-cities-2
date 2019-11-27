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
};

export default ActionCreator;
