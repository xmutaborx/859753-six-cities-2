import React from 'react';
import renderer from 'react-test-renderer';
import CitiesList from './cities-list';

it(`Cities List renders correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      cities={[`first city`, `second city`]}
      changeCity={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
