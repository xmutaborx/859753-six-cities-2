import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16/build";
import toJson from "enzyme-to-json";
import FavoritesEmpty from './favorites-empty.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Favorites Empty correctly renders`, () => {
  const tree = shallow(<FavoritesEmpty />);

  expect(toJson(tree)).toMatchSnapshot();
});
