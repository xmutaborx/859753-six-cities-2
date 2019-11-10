import React from 'react';
import PropTypes from 'prop-types';

const MAX_CITY = 6;

class CitiesList extends React.PureComponent {
  clickHandler(e, city) {
    e.preventDefault();
    this.props.changeCity(city);
  }

  render() {
    const {cities} = this.props;

    return (
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.slice(0, MAX_CITY).map((it) => (
              <li className="locations__item" key={it}>
                <a
                  className="locations__item-link tabs__item"
                  href="#"
                  onClick={(e) => this.clickHandler(e, it)}
                >
                  <span>{it}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCity: PropTypes.func.isRequired
};

export default CitiesList;
