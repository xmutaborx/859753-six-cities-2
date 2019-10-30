// import React from 'react';
// import renderer from 'react-test-renderer';
// import App from './app';

// const offers = [
//   {
//     id: 12,
//     title: `title`,
//     price: 12,
//     type: `apartment`,
//     premium: true,
//     img: `img/apartment`,
//     rating: 12,
//     coordinates: [1, 2]
//   }
// ];

// const configMock = {
//   defaultCity: [12.12345, 1.2],
//   defaultCord: [12.12345634556, 4.89309666406198],
//   zoom: 12,
//   icon: {
//     iconUrl: `img/pin.svg`,
//     iconSize: [12, 12]
//   },
//   zoomControl: false,
//   marker: true,
//   layer: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
//   copyRight: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
// };

// it(`App correctly renders`, () => {
//   const tree = renderer
//     .create(<App
//       offers={offers}
//       mapConfig={configMock}
//     />)
//     .toJSON();

//   expect(tree).toMatchSnapshot();
// });

