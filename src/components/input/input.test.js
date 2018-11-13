import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';

describe('<Input />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Input />);
    expect(wrapper).toMatchSnapshot();
  });
});
