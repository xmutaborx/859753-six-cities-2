import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OfferCard from './offer-card';

Enzyme.configure({adapter: new Adapter()});

describe(`Offer Card`, () => {
  it(`when hovering, the correct data gets into the handler`, () => {
    const hoverHandler = jest.fn();
    // Или не нужно тут присваивать jest.fn ?


    const card = shallow(<OfferCard
      title={`title`}
      price={100}
      type={`room`}
      premium={true}
      img={`img`}
      rating={100}
      onMouseHover={hoverHandler}
      // А тут просто написать какой-то колбэк?
      // onMouseHover={(e) => {
      //  Не врублюсь как сюда должны попасть значения из пропсов...
      // }}
    />);

    const cardHover = card.find(`article`);
    cardHover.simulate(`mouseenter`);

    // expect(hoverHandler).toHaveBeenCalledTimes(1);
    // Что ожидать тут?
  });
});
