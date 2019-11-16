import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';

const OffersList = (props) => {
  const {handleChangeActiveItem, cards, city} = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{cards.length} places to stay in {city}</b>
      <div className="cities__places-list places__list tabs__content" >
        {cards.map((card) =>
          <OfferCard
            key={card.id}
            title={card.title}
            price={card.price}
            type={card.type}
            premium={card.premium}
            img={card.img}
            rating={card.rating}
            onMouseHover={() => handleChangeActiveItem(card)}
          />
        )}
      </div>
    </section>
  )
}

OffersList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    premium: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
  city: PropTypes.string.isRequired
};

export default OffersList;
