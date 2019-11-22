import {getCityOffers, getCitiesList} from './selectors';
import {OFFER_MOCK} from '../mocks/offer-mock';

describe(`Selectors works correctly`, () => {
  it(`getCitiesList works correctly`, () => {
    const allCities = [`Paris`, `Brussels`, `Hamburg`, `Amsterdam`, `Cologne`, `Dusseldorf`, `Moscow`, `Kiev`];
    const availableCities = [`Paris`, `Brussels`, `Hamburg`, `Amsterdam`, `Cologne`, `Dusseldorf`];

    const store = {
      offers: allCities.map((cityName) => {
        const offer = JSON.parse(JSON.stringify(OFFER_MOCK));
        offer.city.name = cityName;
        return offer;
      }),
      city: ``
    };

    expect(getCitiesList(store)).toEqual(availableCities);
  });

  it(`getCityOffers works correctly`, () => {
    const store = {
      offers: OFFER_MOCK,
      city: OFFER_MOCK.city.name
    };
    expect(getCityOffers(store)).toEqual(OFFER_MOCK);
  });
});
