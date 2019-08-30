import React from 'react';
import PropTypes from 'prop-types';

import './tabsWrapper.scss';

const withTabsWrapper = TabsComponet => ({
  title,
  subTitle,
  ...rest
}) => (
  <div className="tabs-wrapper">
    <span className="tabs-wrapper__title">{title}</span>
    <span className="tabs-wrapper__sub-title">{subTitle}</span>
    <div className="tabs-wrapper__border">
      <TabsComponet { ...rest } />
    </div>
  </div>
)

withTabsWrapper.propTypes = {
  TabsComponet: PropTypes.elementType.isRequired
};

export default withTabsWrapper;
