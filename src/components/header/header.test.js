import React from 'react';
import renderer from 'react-test-renderer';
import {Header} from './header.jsx';
import {BrowserRouter as Router} from 'react-router-dom';

import USER_DATA from '../../mocks/user-data-mock';

it(`Header correctly renders`, () => {
  const tree = renderer
    .create(<Router>
      <Header
        userData={USER_DATA}
      />
    </Router>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
