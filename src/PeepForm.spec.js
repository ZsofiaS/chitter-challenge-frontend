import React from 'react';
import renderer from 'react-test-renderer';

import PeepForm from './App';

describe('PeepForm', () => {
  it('snapshot renders', () => {
    const tree = renderer.create(<PeepForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
