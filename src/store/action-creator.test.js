import ActionCreator from './action-creator';
import ActionType from '../store/action-type';
// import OFFER_MOCK from '../mocks/offer-mock';
// import COMMENT_MOCK from '../mocks/comment-mock';

describe(`ActionsCreator returns correctly action`, () => {
  it(`change city return correct object`, () => {
    const city = `Moscow`;
    const action = ActionCreator.changeCity(city);

    expect(action).toEqual({
      type: ActionType.changeCity,
      payload: city
    });
  });

  it(`Load offers return correct object`, () => {
    const offers = [{
      id: 1,
      name: `Paris`,
      price: 39
    }];
    const action = ActionCreator.loadOffers(offers);

    expect(action).toEqual({
      type: ActionType.loadOffers,
      payload: offers
    });
  });

  it(`saveUserData return correct object`, () => {
    const data = {id: 1, name: `Test Name`};
    const action = ActionCreator.saveUserData(data);

    expect(action).toEqual({
      type: ActionType.saveUserData,
      payload: data
    });
  });

  it(`toggleFavorites return correct object`, () => {
    const action = ActionCreator.toggleFavorites(1, true);

    expect(action).toEqual({
      type: ActionType.toggleFavorites,
      payload: {id: 1, status: true}
    });
  });

  it(`changeSortType return correct object`, () => {
    const type = `highToLow`;
    const action = ActionCreator.changeSortType(type);

    expect(action).toEqual({
      type: ActionType.changeSortType,
      payload: type
    });
  });

  it(`setActivePin return correct object`, () => {
    const pin = [69, 12];
    const action = ActionCreator.setActivePin(pin);

    expect(action).toEqual({
      type: ActionType.setActivePin,
      payload: pin
    });
  });

  it(`getComments return correct object`, () => {
    const comments = [{comment: `first`}, {comment: `second`}];
    const action = ActionCreator.getComments(comments);

    expect(action).toEqual({
      type: ActionType.getComments,
      payload: comments
    });
  });

  it(`postComments return correct object`, () => {
    const comments = [{comment: `first`}, {comment: `second`}];
    const action = ActionCreator.postComments(comments);

    expect(action).toEqual({
      type: ActionType.postComments,
      payload: comments
    });
  });

  it(`getFavorites return correct object`, () => {
    const offers = [{offer: `first`}, {offer: `second`}];
    const action = ActionCreator.getFavorites(offers);

    expect(action).toEqual({
      type: ActionType.getFavorites,
      payload: offers
    });
  });

  it(`clearFavoritesList return correct object`, () => {
    const id = 69;
    const action = ActionCreator.clearFavoritesList(id);

    expect(action).toEqual({
      type: ActionType.clearFavoritesList,
      payload: id
    });
  });
});
