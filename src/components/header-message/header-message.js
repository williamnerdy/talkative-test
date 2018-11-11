import React from 'react';
import PropTypes from 'prop-types';

const HeaderMessage = props => (
  <h1 className="header-message">{props.children}</h1>
);

HeaderMessage.propTypes = {
  children: PropTypes.string
};

export default HeaderMessage;
