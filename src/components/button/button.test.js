import React from 'react';
import { shallow } from 'enzyme';
import Button from './button';

describe('<Button />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Button color="facebook" />);
    expect(wrapper).toMatchSnapshot();
  });
});
