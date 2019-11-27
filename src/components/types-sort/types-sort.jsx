import React, {PureComponent} from 'react';

// const SORT_TYPES = {
//   popular: `Pupolar`,
//   lowToHigh: `Price: low to high`,
//   highToLow: `Price: high to low`,
//   rated: `Top rated first`,
// };

class TypesSort extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      type: `Popular`,
    };
  }

  render() {
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
          {this.state.type}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select" />
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex="0">Popular</li>
          <li className="places__option" tabIndex="0">Price: low to high</li>
          <li className="places__option" tabIndex="0">Price: high to low</li>
          <li className="places__option" tabIndex="0">Top rated first</li>
        </ul>
      </form>
    );
  }
}

export default TypesSort;
