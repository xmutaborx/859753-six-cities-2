import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api';
import ActionType from './action-type';
import Operation from './async-actions';
import OFFER_MOCK from '../mocks/offer-mock';


it(`Operation should make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const loadAllOffers = Operation.loadAllOffers();

  apiMock
    .onGet(`/hotels`)
    .reply(200, OFFER_MOCK);

  return loadAllOffers(dispatch, jest.fn(), api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1,
          {
            type: ActionType.LOAD_ALL_OFFERS,
            payload: OFFER_MOCK
          });
      expect(dispatch).toHaveBeenNthCalledWith(2,
          {
            type: ActionType.CHANGE_CITY,
            payload: OFFER_MOCK.city.name
          });
    });
});
