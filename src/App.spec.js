import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import App, { PeepList, LoginForm } from './App';

describe('App', () => {
  test('snapshot renders', () => {
    const tree = renderer.create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('renders the inner LoginForm', () => {
    const wrapper = mount(<App />);
    expect(wrapper.containsMatchingElement(<LoginForm />)).toEqual(true);
  })
})

describe('First test', () => {
  it('first test case', () => {
    expect(true).toEqual(true);
  })
})
