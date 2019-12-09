import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api';
import ActionType from './action-type';
import Operations from './operations';
import OFFER_MOCK from '../mocks/offer-mock';
import COMMENT_MOCK from '../mocks/comment-mock';

describe(`Operations`, () => {

  it(`loadOffers works correctly`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loadOffers = Operations.loadOffers();
    const mock = OFFER_MOCK[0];

    apiMock
      .onGet(`/hotels`)
      .reply(200, OFFER_MOCK);

    return loadOffers(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.loadOffers,
              payload: OFFER_MOCK
            });
        expect(dispatch).toHaveBeenNthCalledWith(2,
            {
              type: ActionType.changeCity,
              payload: mock.city.name
            });
      });
  });

  it(`getComments works correctly`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const idComment = 69;
    const getComments = Operations.getComments(idComment);

    apiMock
      .onGet(`/comments/${idComment}`)
      .reply(200, COMMENT_MOCK);

    return getComments(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.getComments,
              payload: COMMENT_MOCK
            });
      });
  });

  it(`getFavorites works correctly`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const getFavorites = Operations.getFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, OFFER_MOCK);

    return getFavorites(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.getFavorites,
              payload: OFFER_MOCK
            });
      });
  });

  it(`toggleFavorites works correctly`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const id = 1;
    const status = true;
    const toggleFavorites = Operations.toggleFavorites(id, status);
    const mock = OFFER_MOCK;

    apiMock
      .onPost(`/favorite/${id}/${status ? 1 : 0}`)
      .reply(200, mock);

    return toggleFavorites(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.toggleFavorites,
              payload: {id, status}
            });
        expect(dispatch).toHaveBeenNthCalledWith(2,
            {
              type: ActionType.clearFavoritesList,
              payload: id
            });
      });
  });

  it(`Authorization works correctly`, () => {
    const mockData = {email: `test@test.com`, password: `testpass`};
    const MockReply = {id: 1, email: `test@test.com`, name: `Bill`};
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const authorization = Operations.authorization(mockData.email, mockData.password);

    apiMock
      .onPost(`/login`, mockData)
      .reply(200, MockReply);

    return authorization(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.saveUserData,
              payload: MockReply
            });
      });
  });

  it(`postComments works correctly`, () => {
    const mock = {id: 69, rating: 5, comment: `test comment`};
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const postComments = Operations.postComments(mock.id, mock.rating, mock.comment);

    apiMock
      .onPost(`/comments/${mock.id}`, {rating: mock.rating, comment: mock.comment})
      .reply(200, COMMENT_MOCK);

    return postComments(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1,
            {
              type: ActionType.postComments,
              payload: COMMENT_MOCK
            });
      });
  });

});
