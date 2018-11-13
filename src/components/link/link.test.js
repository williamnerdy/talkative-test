import React from 'react';
import { shallow } from 'enzyme';
import Link from './link';

describe('<Link />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Link to="//test.test">Test</Link>);
    expect(wrapper).toMatchSnapshot();
  });
});
