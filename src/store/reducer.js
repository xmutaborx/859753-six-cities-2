import {actionType} from './action-type';
import {initialState} from './initial-state';

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
