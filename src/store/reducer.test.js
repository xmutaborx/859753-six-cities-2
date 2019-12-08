import reducer from './reducer';
import ActionCreator from './action-creator';
import OFFER_MOCK from '../mocks/offer-mock';


describe(`reducer returns correctly state`, () => {
  it(`"loadOffers" return correctly state`, () => {
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

    const action = ActionCreator.loadOffers(offers);

    expect(reducer(state, action)).toEqual({
      city: `Berlin`,
      offers: [{
        id: 3,
        name: `Moscow`,
        premium: true
      }]

    });
  });

  it(`"change city" return correctly state`, () => {
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

  it(`"saveUserData" return correctly state`, () => {
    const userData = {
      id: 42,
      name: `Patric`,
      avatar: `src`
    };

    const state = {
      userData: [],
    };

    const action = ActionCreator.saveUserData(userData);

    expect(reducer(state, action)).toEqual({userData});
  });

  it(`toggleFavorites" return correctly state`, () => {
    const state = {
      offers: OFFER_MOCK,
    };
    const action = ActionCreator.toggleFavorites({id: 1, status: true});
    const sortOffers = OFFER_MOCK.slice();
    // eslint-disable-next-line camelcase
    sortOffers[0].is_favorite = true;

    expect(reducer(state, action)).toEqual({offers: sortOffers});
  });
});

// describe(`ActionsCreator returns correctly action`, () => {
//   it(`change city return correct object`, () => {
//     const city = `Moscow`;
//     const action = ActionCreator.changeCity(city);

//     expect(action).toEqual({
//       type: actionsType.changeCity,
//       payload: city
//     });
//   });

//   // it(`set offers return correct object`, () => {
//   //   const offers = [{
//   //     id: 1,
//   //     name: `Paris`,
//   //     price: 39
//   //   }];
//   //   const action = ActionCreator.setOffers(offers);

//   //   expect(action).toEqual({
//   //     type: ActionType.setOffers,
//   //     payload: offers
//   //   });
//   // });

//   // it(`set Available Cities return correct object`, () => {
//   //   const cities = [`first city`, `second city`];
//   //   const action = ActionCreator.setAvailableCities(cities);

//   //   expect(action).toEqual({
//   //     type: ActionType.availableCities,
//   //     payload: cities
//   //   });
//   // });

//   // it(`set Available Offers return correct object`, () => {
//   //   const offers = [{
//   //     id: 1,
//   //     name: `Berlin`,
//   //     premium: true
//   //   }];
//   //   const action = ActionCreator.setAvailableOffers(offers);

//   //   expect(action).toEqual({
//   //     type: ActionType.availableOffers,
//   //     payload: offers
//   //   });
//   // });
// });
