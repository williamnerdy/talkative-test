import React from 'react';
import { shallow } from 'enzyme';
import Icon from './icon';

describe('<Icon />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Icon name="facebook" />);
    expect(wrapper).toMatchSnapshot();
  });
});
