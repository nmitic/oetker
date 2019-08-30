import React from 'react';
import PropTypes from 'prop-types';

import './AnimatedList.scss';

export const generateCountElements = endCount => {
  return Array(endCount + 1)
    .fill()
    .map((item, index) => index)
}

const AnimatedList = ({ data, type }) => (
  <div className="animated-list">
    {
      data.map(item => (
        <div 
          className="animated-list__item"
          key={item.id}
        >
          <a 
            href={item.href}
            target="_blank"
            className="animated-list__anchor"
          >
            {item.title}
          </a>
          <span className="animated-list__info">
            <div className="animated-list__count-wrapper">
              {
                generateCountElements(item.count).map((item, index) => (
                  <span 
                    className="animated-list__count"
                    key={index}
                  >
                    {item }
                  </span>
                ))
              }
            </div>
            &nbsp; {type}
          </span>
        </div>
      ))
    }
  </div>
)

AnimatedList.defaultProps = {
  data: [],
  type: "POST"
}

AnimatedList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
    count: PropTypes.number,
    id: PropTypes.number,
  })),
  type: PropTypes.oneOf(["SONGS", "POST", "YEARS EXPERIANCE"])
};

export default AnimatedList;