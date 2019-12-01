const OFFER_MOCK = [
  {
    id: 1,
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      }
    },
    // eslint-disable-next-line camelcase
    preview_image: `img/1.png`,
    images: [`img/1.png`, `img/2.png`],
    title: `Beautiful & luxurious studio at great location`,
    // eslint-disable-next-line camelcase
    is_favorite: false,
    // eslint-disable-next-line camelcase
    is_premium: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 3,
    // eslint-disable-next-line camelcase
    max_adults: 4,
    price: 120,
    goods: [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    host: {
      id: 3,
      // eslint-disable-next-line camelcase
      is_pro: true,
      name: `Angelina`,
      // eslint-disable-next-line camelcase
      avatar_url: `img/1.png`
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  }
];

export default OFFER_MOCK;
