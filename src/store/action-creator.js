import {actionType} from './action-type';

export const ActionCreator = {
  changeCity: (city) => ({
    type: actionType.changeCity,
    payload: city
  }),

  loadOffers: (offers) => ({
    type: actionType.loadOffers,
    payload: offers
  }),
};
