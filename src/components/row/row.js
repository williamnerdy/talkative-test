import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Row = props => (
  <div className={`row${props.reverse ? ' reverse' : ''}`}>
    {props.children}
  </div>
);

Row.defaultProps = {
  reverse: false
};

Row.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node
};

export default Row;
