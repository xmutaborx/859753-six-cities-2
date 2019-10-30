// import React from 'react';
// import Enzyme, {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import OfferCard from './offer-card';

// Enzyme.configure({adapter: new Adapter()});

// const mock = {
//   title: `title`,
//   price: 100,
//   type: `room`,
//   premium: true,
//   img: `img`,
//   rating: 100
// };

// describe(`Offer Card`, () => {
//   it(`when hovering, the correct data gets into the handler`, () => {
//     const hoverHandler = jest.fn();

//     const card = shallow(<OfferCard
//       title={mock.title}
//       price={mock.price}
//       type={mock.type}
//       premium={mock.premium}
//       img={mock.img}
//       rating={mock.rating}
//       onMouseHover={hoverHandler}
//     />);

//     const article = card.find(`article`);
//     article.simulate(`mouseenter`, mock);
//     expect(hoverHandler).toHaveBeenCalledTimes(1);
//     expect(hoverHandler.mock.calls[0][0]).toBe(mock);
//   });
// });
