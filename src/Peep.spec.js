import React from 'react';
import renderer from 'react-test-renderer';

import Peep from './App';

describe('Peep', ()  => {
  test('snapshot renders', () => {
    const tree = renderer
      .create(<Peep post="peep"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
