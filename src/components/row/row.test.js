import React from 'react';
import { shallow } from 'enzyme';
import Row from './row';

describe('<Row />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Row />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with children', () => {
    const wrapper = shallow(<Row>Test</Row>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with multiple children', () => {
    const wrapper = shallow(
      <Row>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </Row>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
