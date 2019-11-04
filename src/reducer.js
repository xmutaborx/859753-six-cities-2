const initialState = {
  city: '',
  offers: []
};


const ActionCreator = {
  changeCity: (city) => ({
    type: `CHANGE_CITY`,
    payload: city
  }),

  getOffers: (offer) => ({
    type: `GET_OFFERS`,
    payload: offer
  }),

}


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY` : return Object.assign({}, state, {
      city: action.payload,
    });

    case `GET_OFFERS` : return Object.assign({}, state, {
      offers: action.payload,
    });
  }
}

export {
  ActionCreator,
  reducer
}