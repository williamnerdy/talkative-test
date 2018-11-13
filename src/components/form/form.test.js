import React from 'react';
import { shallow } from 'enzyme';
import Form from './form';

describe('<Form />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });
});
