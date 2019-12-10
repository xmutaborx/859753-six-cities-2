import React from 'react';
import PropTypes from 'prop-types';
import {PROP_TYPES_OFFERS_LIST} from '../../types/types';

import OfferCard from '../offer-card/offer-card.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import FavoritesCard from '../favorites-card/favorites-card.jsx';

const OffersList = (props) => {
  const {onChangeActiveItem, onClearItem, offers, nearMode, favoritesMode, favoritesCity} = props;
  let wrappedClasses = `cities__places-list places__list tabs__content`;

  if (nearMode) {
    wrappedClasses = `near-places__list places__lis`;
  }

  if (favoritesMode) {
    return (
      <ul className="favorites__list">
        {favoritesCity.map((city) => (
          <li className="favorites__locations-items" key={city}>
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {offers.map((offer) => {
                if (offer.city.name === city) {
                  return <FavoritesCard
                    card={offer}
                    isFavorite={offer.is_favorite}
                    title={offer.title}
                    key={offer.id}
                    price={offer.price}
                    type={offer.type}
                    image={offer.preview_image}
                    rating={offer.rating}
                    id={offer.id}
                  />;
                } else {
                  return null;
                }
              })}
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className={wrappedClasses} >
      {offers.map((card) =>
        <OfferCard
          key={card.id}
          id={card.id}
          isFavorite={card.is_favorite}
          title={card.title}
          price={card.price}
          type={card.type}
          isPremium={card.is_premium}
          image={card.preview_image}
          rating={card.rating}
          nearMode={nearMode}
          onChangeActiveItem={() => onChangeActiveItem(card)}
          onClearItem={onClearItem}
        />
      )}
    </div>
  );
};

OffersList.defaultProps = {
  nearMode: false,
  favoritesMode: false,
};

OffersList.propTypes = {
  onChangeActiveItem: PropTypes.func.isRequired,
  onClearItem: PropTypes.func.isRequired,
  offers: PROP_TYPES_OFFERS_LIST,
  nearMode: PropTypes.bool,
  favoritesMode: PropTypes.bool,
  favoritesCity: PropTypes.arrayOf(PropTypes.string)
};

export {OffersList};
export default withActiveItem(OffersList);
