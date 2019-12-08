import {getCitiesList, getCityOffers} from './selectors';
import OFFER_MOCK from '../mocks/offer-mock';

describe(`Selectors works correctly`, () => {
  const allCities = [`Paris`, `Brussels`, `Hamburg`, `Amsterdam`, `Cologne`, `Dusseldorf`, `Moscow`, `Kiev`];
  const availableCities = [`Paris`, `Brussels`, `Hamburg`, `Amsterdam`, `Cologne`, `Dusseldorf`];
  const mock = OFFER_MOCK[0];

  it(`getCitiesList works correctly`, () => {
    const store = {
      offers: allCities.map((cityName) => {
        const offer = JSON.parse(JSON.stringify(mock));
        offer.city.name = cityName;
        return offer;
      }),
    };
    expect(getCitiesList(store)).toEqual(availableCities);
  });

  it(`getCityOffers works correctly`, () => {
    const store = {
      offers: OFFER_MOCK,
      city: mock.city.name
    };
    expect(getCityOffers(store)).toEqual(OFFER_MOCK);
  });

  it(`getCityOffers sort 'Low to High' correctly`, () => {
    const store = {
      offers: OFFER_MOCK,
      city: mock.city.name,
      type: `lowToHigh`
    };
    expect(getCityOffers(store)).toEqual(OFFER_MOCK);
  });

  it(`getCityOffers sort 'High to Low' correctly`, () => {
    const store = {
      offers: OFFER_MOCK,
      city: mock.city.name,
      type: `highToLow`
    };

    const sortOffers = OFFER_MOCK.slice();
    [sortOffers[0], sortOffers[1]] = [sortOffers[1], sortOffers[0]];
    expect(getCityOffers(store)).toEqual(sortOffers);
  });

  it(`getCityOffers sort 'Rated' correctly`, () => {
    const store = {
      offers: OFFER_MOCK,
      city: mock.city.name,
      type: `rated`
    };

    const sortOffers = OFFER_MOCK.slice();
    [sortOffers[0], sortOffers[1]] = [sortOffers[1], sortOffers[0]];
    expect(getCityOffers(store)).toEqual(sortOffers);
  });
});
