import React from 'react';
import { shallow } from 'enzyme';
import Title from './title';

describe('<Title />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with "Test" text', () => {
    const wrapper = shallow(<Title>Test</Title>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with color white', () => {
    const wrapper = shallow(<Title color="white">Test</Title>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with different style', () => {
    const wrapper = shallow(<Title style={{ padding: '100px' }}>Test</Title>);
    expect(wrapper).toMatchSnapshot();
  });
});
