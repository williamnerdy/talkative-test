import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Row = props => <div className="row">{props.children}</div>;

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
