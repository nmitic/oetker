import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const TabsPane = ({ children }) => (
  <div className="tabs__content_item">
    {children}
  </div>
);

TabsPane.propTypes = {
  children: PropTypes.node.isRequired
};