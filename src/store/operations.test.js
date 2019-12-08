import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api';
import ActionType from './action-type';
import Operations from './operations';
import OFFER_MOCK from '../mocks/offer-mock';


it(`Operation should make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const loadOffers = Operations.loadOffers();
  const mock = OFFER_MOCK[0];

  apiMock
    .onGet(`/hotels`)
    .reply(200, mock);

  return loadOffers(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionType.loadOffers,
            payload: mock
          });
      expect(dispatch).toHaveBeenNthCalledWith(2,
          {
            type: ActionType.changeCity,
            payload: mock.city.name
          });
    });
});
