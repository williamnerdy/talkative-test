import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ children, color, ...props }) => (
  <button className={`button ${color}`} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  color: PropTypes.oneOf(['form', 'facebook']).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

export default Button;
