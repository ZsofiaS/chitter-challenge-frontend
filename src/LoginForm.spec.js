import React from 'react';
import renderer from 'react-test-renderer';

import LoginForm from './App';

describe('LoginForm', () => {
  it('snapshot renders', () => {
    const tree = renderer.create(<LoginForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})
