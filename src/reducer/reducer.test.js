import {reducer, ActionCreator} from './reducer';

describe(`ActionsCreator returns correctly action`, () => {
  it(`change city`, () => {
    const city = `Moscow`;
    const action = ActionCreator.changeCity(city);

    expect(action).toEqual({
      type: `CHANGE_CITY`,
      payload: city
    });
  });

  it(`set offers`, () => {
    const offers = [{
      id: 1,
      name: `Paris`,
      price: 39
    }];
    const action = ActionCreator.setOffers(offers);

    expect(action).toEqual({
      type: `SET_OFFERS`,
      payload: offers
    });
  });
});

describe(`reducer returns from reducer correctly state`, () => {
  it(`change city action return correctly state`, () => {
    const city = `Moscow`;
    const state = {
      city: ``,
      offers: []
    };
    const action = ActionCreator.changeCity(city);

    expect(reducer(state, action)).toEqual({
      city: `Moscow`,
      offers: []
    });
  });

  it(`set offers action from reducer return correctly state`, () => {
    const offers = [{
      id: 3,
      name: `Moscow`,
      premium: true
    }];

    const state = {
      city: `Berlin`,
      offers: [{
        id: 1,
        name: `Berlin`,
        premium: false
      }]
    };

    const action = ActionCreator.setOffers(offers);

    expect(reducer(state, action)).toEqual({
      city: `Berlin`,
      offers: [{
        id: 3,
        name: `Moscow`,
        premium: true
      }]

    });
  });
});
