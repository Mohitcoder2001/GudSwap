import React from 'react';
import PropTypes from 'prop-types';
import './ProgressBar.css';

const ProgressBar = ({ value }) => {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${value}%` }}></div>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired
};

export default ProgressBar;
