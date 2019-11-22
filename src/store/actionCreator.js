import {actionType} from './actionType';

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
