import {reducer, ActionCreator, actionsTypes} from './reducer';

describe(`ActionsCreator returns correctly action`, () => {
  it(`change city return correct object`, () => {
    const city = `Moscow`;
    const action = ActionCreator.changeCity(city);

    expect(action).toEqual({
      type: actionsTypes.changeCity,
      payload: city
    });
  });

  it(`set offers return correct object`, () => {
    const offers = [{
      id: 1,
      name: `Paris`,
      price: 39
    }];
    const action = ActionCreator.setOffers(offers);

    expect(action).toEqual({
      type: actionsTypes.setOffers,
      payload: offers
    });
  });

  it(`set Available Cities return correct object`, () => {
    const cities = [`first city`, `second city`];
    const action = ActionCreator.setAvailableCities(cities);

    expect(action).toEqual({
      type: actionsTypes.availableCities,
      payload: cities
    });
  });

  it(`set Available Offers return correct object`, () => {
    const offers = [{
      id: 1,
      name: `Berlin`,
      premium: true
    }];
    const action = ActionCreator.setAvailableOffers(offers);

    expect(action).toEqual({
      type: actionsTypes.availableOffers,
      payload: offers
    });
  });
});

describe(`reducer returns from reducer correctly state`, () => {
  it(`"change city" action return correctly state`, () => {
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

  it(`"set offers" action from reducer return correctly state`, () => {
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

  it(`"set availabel cities" return correctly state`, () => {
    const cities = [`Berlin`, `Moscow`];
    const state = {
      availableCities: [],
      offers: [123]
    };
    const action = ActionCreator.setAvailableCities(cities);

    expect(reducer(state, action)).toEqual({
      availableCities: cities,
      offers: [123]
    });
  });

  it(`"set available offers" return correctly state`, () => {
    const offers = [{
      id: 42,
      name: `Paris`,
      premium: false
    }];
    const state = {
      availableOffers: [],
      city: ``
    };
    const action = ActionCreator.setAvailableOffers(offers);

    expect(reducer(state, action)).toEqual({
      availableOffers: offers,
      city: ``
    });
  });
});
