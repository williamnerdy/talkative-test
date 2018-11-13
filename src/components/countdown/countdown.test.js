import React from 'react';
import { shallow } from 'enzyme';
import Countdown from './countdown';

describe('<Countdown />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Countdown />);
    expect(wrapper).toMatchSnapshot();
  });
});
