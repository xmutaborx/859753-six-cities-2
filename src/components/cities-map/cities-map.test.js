import React from 'react';
import renderer from 'react-test-renderer';
import CitiesMap from './cities-map.jsx';

const offersMock = [
  {
    id: 123,
    title: `test title`,
    price: 123,
    type: `apartment`,
    premium: true,
    img: `img/apartment-01.jpg`,
    rating: 12,
    coordinates: [12.123123123, 4.8123123126198]
  }
];

const configMock = {
  defaultCity: [12.12345, 1.2],
  defaultCord: [12.12345634556, 4.89309666406198],
  zoom: 12,
  icon: {
    iconUrl: `img/pin.svg`,
    iconSize: [12, 12]
  },
  zoomControl: false,
  marker: true,
  layer: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  copyRight: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

it(`Map correctly renders`, () => {
  const tree = renderer
    .create(<CitiesMap
      mapConfig={configMock}
      offers={offersMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
