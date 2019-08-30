import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';
import withTabsWrapper from './WithTabsWrapper';

// Utils
import { generateRandomNumber } from '../../utils';

import './Tabs.scss';

const getRandomChild = children => children[generateRandomNumber(children.length)]

export const TabsPure = ({
  children,
  accordion,
  selected
}) => {
  const defaultActiveTab = selected ? selected : getRandomChild(children).props.label

  const [ activeTab, setActiveTab ] = useState(defaultActiveTab);
  const onClickTabItem = tab => {
    const activeTabValue = (tab === activeTab) && accordion ? undefined : tab

    setActiveTab(activeTabValue)
  };

  const TabsContent = (
    <div className="tabs__content">
      { 
        children.filter(({ props: { label } }) => (label === activeTab))
      }
    </div>
  );

  const tabsListClassName = `tabs__list${accordion ? ' tabs__list--accordion' : ''}`;
  const tabsClassName = `tabs${accordion ? ' tabs--accordion' : ''}`;

  return (
    <div className={tabsClassName}>
      <ol className={tabsListClassName}>
        {
          children.map(({props: { label }}) => (
            <Fragment key={label}>
              <Tab
                activeTab={activeTab}
                label={label}
                onClick={onClickTabItem}
                accordion={accordion}
              />
              { (accordion && label === activeTab) && TabsContent }
            </Fragment>
          ))
        }
      </ol>
    { !accordion && TabsContent }
    </div>
  )
};

TabsPure.defaultProps = {
  accordion: false
}

TabsPure.propTypes = {
  children: PropTypes.node.isRequired,
  accordion: PropTypes.bool,
  selected: PropTypes.string
};


export default withTabsWrapper(TabsPure);