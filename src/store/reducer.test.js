import reducer from './reducer';
import ActionCreator from './action-creator';
import OFFER_MOCK from '../mocks/offer-mock';
import COMMENT_MOCK from '../mocks/comment-mock';

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

  it(`"changeSortType" return correctly state`, () => {
    const sortType = `highToLow`;
    const state = {
      sortType: ``
    };
    const action = ActionCreator.changeSortType(sortType);

    expect(reducer(state, action)).toEqual({sortType});
  });

  it(`"setActivePin" return correctly state`, () => {
    const activePin = [42, 24];
    const state = {
      activePin: [0, 1]
    };
    const action = ActionCreator.setActivePin(activePin);

    expect(reducer(state, action)).toEqual({activePin});
  });

  it(`"getComments" return correctly state`, () => {
    const comments = COMMENT_MOCK;
    const state = {
      comments: [`test`]
    };
    const action = ActionCreator.getComments(comments);

    expect(reducer(state, action)).toEqual({comments});
  });

  it(`"postComments" return correctly state`, () => {
    const comments = COMMENT_MOCK;
    const state = {
      comments: [`test`]
    };
    const action = ActionCreator.postComments(comments);

    expect(reducer(state, action)).toEqual({comments});
  });

  it(`"getFavorites" return correctly state`, () => {
    const favorites = OFFER_MOCK;
    const state = {
      favorites: [{id: 123, name: `?`}]
    };
    const action = ActionCreator.getFavorites(favorites);

    expect(reducer(state, action)).toEqual({favorites});
  });

  it(`"clearFavoritesList" return correctly state`, () => {
    let changedOffer = OFFER_MOCK.slice();
    changedOffer = changedOffer.splice(0, 1);
    const state = {
      favorites: OFFER_MOCK
    };
    const action = ActionCreator.clearFavoritesList(2);

    expect(reducer(state, action)).toEqual({favorites: changedOffer});
  });
});
