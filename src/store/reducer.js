import {actionType} from './actionType';
import {initialState} from './initialState';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.loadOffers : return Object.assign({}, state, {
      offers: action.payload,
    });

    case actionType.changeCity : return Object.assign({}, state, {
      city: action.payload,
    });

    default: return state;
  }
};
