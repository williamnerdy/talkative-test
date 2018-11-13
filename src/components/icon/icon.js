import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Icon = ({ name }) => <i className={`icon ${name}`} />;

Icon.propTypes = {
  name: PropTypes.oneOf(['facebook', 'sign-in', 'user']).isRequired
};

export default Icon;
