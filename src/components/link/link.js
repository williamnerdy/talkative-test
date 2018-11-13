import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Link = ({ to, children }) => (
  <a className="link" href={to} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Link;
