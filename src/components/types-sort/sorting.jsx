import React from 'react';
import PropTypes from 'prop-types';

import {SORT_OPTION} from '../../constants/constants';
import withSorting from '../../hocs/with-sorting/with-sorting.jsx';

const Sorting = (props) => {
  const {onToggleList, onChangeType, isOpen, sortTypeLabel, sortType} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onToggleList}>
        {sortTypeLabel}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? `places__options--opened` : ``}`}>
        {SORT_OPTION.map((it) => (
          <li
            className={`places__option ${sortType === it.type ? `places__option--active` : ``}`}
            tabIndex="0"
            onClick={() => onChangeType(it)}
            key={it.type}
          >{it.value}</li>
        ))}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  onToggleList: PropTypes.func.isRequired,
  onChangeType: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  sortTypeLabel: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
};

export default withSorting(Sorting);
