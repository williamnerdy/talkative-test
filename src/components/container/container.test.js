import React from 'react';
import { shallow } from 'enzyme';
import Container from './container';

describe('<Container />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Container />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with children', () => {
    const wrapper = shallow(
      <Container>
        <h1>Test</h1>
      </Container>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
