import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import LoginForm from './LoginForm';

describe('LoginForm', () => {
  let wrapper;

  test('snapshot renders', () => {
    const tree = renderer.create(<LoginForm />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  beforeEach(() => wrapper = shallow(<LoginForm />));

  it('should render login button', () => {
    expect(wrapper.find('button').length).toEqual(2);
  })
})
