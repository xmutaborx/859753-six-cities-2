import React from 'react';
import PropTypes from 'prop-types';

class CitiesList extends React.PureComponent {
  clickHandler(e, city) {
    e.preventDefault();
    this.props.onChangeCity(city);
  }

  render() {
    const {cities, currentCity} = this.props;

    return (
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.map((it) => (
              <li className="locations__item" key={it}>
                <a
                  className={`locations__item-link tabs__item ${currentCity === it ? `tabs__item--active` : ``}`}
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
  currentCity: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

export default CitiesList;
