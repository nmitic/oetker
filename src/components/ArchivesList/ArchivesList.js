import React from 'react';
import PropTypes from 'prop-types';

import './ArchivesList.scss';

const ArchivesList = ({data}) => (
  <div className="archives-list">
    {
      data.map(archiveItem => (
          <div className="archives-list__item" key={archiveItem.id}>
            <h1>{archiveItem.title}</h1>
            <p className="archives-list__text">
              <img className="archives-list__image" src={archiveItem.image} alt="" />
              {archiveItem.text}
            </p>
          </div>
        ) 
      )
    }
  </div>
)

ArchivesList.defaultProps = {
  data: []
}

ArchivesList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.number,
  }))
};

export default ArchivesList;