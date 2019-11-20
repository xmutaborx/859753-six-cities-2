import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const OffersList = (props) => {
  const {handleChangeActiveItem, offers, city} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <div className="cities__places-list places__list tabs__content" >
        {offers.map((card) =>
          <OfferCard
            key={card.id}
            title={card.title}
            price={card.price}
            type={card.type}
            isPremium={card.is_premium}
            images={card.images}
            rating={card.rating}
            onMouseOver={() => handleChangeActiveItem(card)}
          />
        )}
      </div>
    </section>
  );
};

OffersList.propTypes = {
  handleChangeActiveItem: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    is_premium: PropTypes.bool.isRequired,
    images: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
  })),
  city: PropTypes.string.isRequired
};

export {OffersList};
export default withActiveItem(OffersList);
