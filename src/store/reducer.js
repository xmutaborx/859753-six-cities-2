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

    case ActionType.saveUserData : return Object.assign({}, state, {
      userData: action.payload,
    });

    case ActionType.toggleFavorites : {
      let newOffers = state.offers.map((offer) => {
        const selectOffer = JSON.parse(JSON.stringify(offer));
        if (offer.id === action.payload.id) {
          // eslint-disable-next-line camelcase
          selectOffer.is_favorite = action.payload.status;
          return selectOffer;
        }
        return offer;
      });
      return Object.assign({}, state, {
        offers: newOffers,
      });
    }

    case ActionType.changeSortType : return Object.assign({}, state, {
      sortType: action.payload,
    });

    case ActionType.setActivePin : return Object.assign({}, state, {
      activePin: action.payload,
    });

    case ActionType.getComments : return Object.assign({}, state, {
      comments: action.payload,
    });

    case ActionType.postComments : return Object.assign({}, state, {
      comments: action.payload,
    });

    case ActionType.getFavorites : return Object.assign({}, state, {
      favorites: action.payload,
    });

    case ActionType.clearFavoritesList : {
      let newOffers = state.favorites.filter((offer) => offer.id !== action.payload);
      return Object.assign({}, state, {
        favorites: newOffers,
      });
    }

    default: return state;
  }
};

export default reducer;
