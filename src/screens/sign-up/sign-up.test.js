import React from 'react';
import { shallow } from 'enzyme';
import SignUp from './sign-up';

describe('<SignUp />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper).toMatchSnapshot();
  });
});
