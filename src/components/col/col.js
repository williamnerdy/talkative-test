import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Col = props => (
  <div className={`col col-${props.size}`}>{props.children}</div>
);

Col.defaultProps = {
  size: 12
};

Col.propTypes = {
  size: PropTypes.oneOf([12, 6, 4]),
  children: PropTypes.node
};

export default Col;
