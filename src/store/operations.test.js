import MockAdapter from 'axios-mock-adapter';
import createAPI from '../api';
import ActionType from './action-type';
import Operation from './operation';
import OFFER_MOCK from '../mocks/offer-mock';


it(`Operation should make a correct API call to /hotels`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const loadOffers = Operation.loadAllOffers();

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
            payload: OFFER_MOCK.city.name
          });
    });
});
