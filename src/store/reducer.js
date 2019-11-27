import ActionType from './action-type';
import InitialState from './initial-state';

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionType.loadOffers : return Object.assign({}, state, {
      offers: action.payload,
    });

    case ActionType.changeCity : return Object.assign({}, state, {
      city: action.payload,
    });

    default: return state;
  }
};

export default reducer;
