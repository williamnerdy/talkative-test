import React from 'react';
import { shallow } from 'enzyme';
import SignIn from './sign-in';

describe('<SignIn />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
  });
});
