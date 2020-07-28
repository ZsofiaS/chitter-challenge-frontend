import React from 'react';
import renderer from 'react-test-renderer';

import PeepList from './App';

describe('PeepList', () => {
  it('snapshot renders', () => {
    const tree = renderer.create(<PeepList peeps={[1,3,4]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
