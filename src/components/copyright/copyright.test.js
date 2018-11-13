import React from 'react';
import { shallow } from 'enzyme';
import Copyright from './copyright';

describe('<Copyright />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Copyright />);
    expect(wrapper).toMatchSnapshot();
  });
});
