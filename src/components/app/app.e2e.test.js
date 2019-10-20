import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({adapter: new Adapter()});

it(`click on the title works correctly`, () => {
  const clickHandler = jest.fn();

  const app = shallow(<App
    titles={[`Title`]}
    handleClick={clickHandler}
  />);

  const title = app.find(`p`);
  title.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
