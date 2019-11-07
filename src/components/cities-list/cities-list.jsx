import React from 'react';
import PropTypes from 'prop-types';

const citiesList = ({cities, changeCity}) => {
  const MAX_CITY = 6;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.slice(0, MAX_CITY).map((it, i) => (
            <li className="locations__item" key={i + it}>
              <a
                className="locations__item-link tabs__item"
                href="#"
                onClick={(e) => {
                  // eslint-disable-next-line no-unused-expressions
                  e.preventDefault;
                  changeCity(it);
                }}>
                <span>{it}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

citiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeCity: PropTypes.func.isRequired
};

export default citiesList;
