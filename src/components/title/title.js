import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Title = props => (
  <h1 className={`title ${props.color}`} style={props.style}>
    {props.children}
  </h1>
);

Title.defaultProps = {
  color: 'default',
  style: {}
};

Title.propTypes = {
  color: PropTypes.oneOf(['default', 'white']),
  style: PropTypes.object,
  children: PropTypes.string
};

export default Title;
