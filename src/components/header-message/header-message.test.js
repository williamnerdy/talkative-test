import React from 'react';
import { shallow } from 'enzyme';
import HeaderMessage from './header-message';

describe('<HeaderMessage />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HeaderMessage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with "Test" text', () => {
    const wrapper = shallow(<HeaderMessage>Test</HeaderMessage>);
    expect(wrapper).toMatchSnapshot();
  });
});
