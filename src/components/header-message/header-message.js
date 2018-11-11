import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const HeaderMessage = props => (
  <h1 className="header-message">{props.children}</h1>
);

HeaderMessage.propTypes = {
  children: PropTypes.string
};

export default HeaderMessage;
