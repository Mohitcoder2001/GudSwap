import React from 'react';
import PropTypes from 'prop-types';
import './Label.css';

const Label = ({ text, isActive }) => {
  return (
    <span className={`label ${isActive ? 'active' : ''}`}>{text}</span>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default Label;
