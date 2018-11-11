import React from 'react';
import { shallow } from 'enzyme';
import Card from './card';

describe('<Card />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper).toMatchSnapshot();
  });
});
