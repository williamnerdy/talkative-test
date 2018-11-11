import React from 'react';
import { shallow } from 'enzyme';
import Main from './main';

describe('<Main />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  });
});
