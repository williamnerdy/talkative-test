import React from 'react';
import { shallow } from 'enzyme';
import Col from './col';

describe('<Col />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Col />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with children', () => {
    const wrapper = shallow(<Col>Test</Col>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with multiple children', () => {
    const wrapper = shallow(
      <Col>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </Col>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with size = 4', () => {
    const wrapper = shallow(<Col size={4} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with size = 6', () => {
    const wrapper = shallow(<Col size={6} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with size = 12', () => {
    const wrapper = shallow(<Col size={12} />);
    expect(wrapper).toMatchSnapshot();
  });
});
