import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Tab.scss'

const Tab = ({
  label,
  onClick,
  activeTab,
  accordion
}) => {
  const handleOnClick = () => onClick(label);
  
  const className = 
    `tab${activeTab === label ? ' tab--active' : ''}${accordion ? ' tab--accordion' : ''}`;

  return (
    <li 
      className={className}
      onClick={handleOnClick}
    >
      {label}
    </li>
  )
}

Tab.defaultProps = {
  onClick: undefined,
  accordion: false
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  activeTab: PropTypes.string,
  accordion: PropTypes.bool
};

export default Tab;