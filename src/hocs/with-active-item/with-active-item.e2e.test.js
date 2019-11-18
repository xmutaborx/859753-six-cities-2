import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OffersList} from '../../components/offer-list/offer-list.jsx';
import {cardMock} from '../../mocks/card-mock';
import withActiveItem from './with-active-item.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`HOC with-active-item`, () => {
  const ComponentWrapped = withActiveItem(OffersList);

  const wrapper = mount(<ComponentWrapped
    cards={cardMock}
    city={`Moscow`}
  />);

  it(`activeItem from HOC state is empty object`, () => {
    expect(wrapper.state().activeItem).toEqual({});
  });

  it(`HOC state change correctly when mouse over`, () => {
    const article = wrapper.find(`article`);
    article.simulate(`mouseenter`, cardMock);
    expect(wrapper.state().activeItem).toEqual(cardMock[0]);
  });

});
