import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Col = props => (
  <div className={`col col-${props.size}`}>{props.children}</div>
);

Col.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  children: PropTypes.node
};

export default Col;
