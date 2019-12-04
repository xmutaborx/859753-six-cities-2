import React from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';

const OffersList = (props) => {
  const {onChangeActiveItem, onClearItem, offers, nearMode} = props;
  let wrappedClasses = `cities__places-list places__list tabs__content`;

  if (nearMode) {
    wrappedClasses = `near-places__list places__lis`;
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
};

OffersList.propTypes = {
  onChangeActiveItem: PropTypes.func.isRequired,
  onClearItem: PropTypes.func.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    // eslint-disable-next-line camelcase
    is_premium: PropTypes.bool.isRequired,
    // eslint-disable-next-line camelcase
    is_favorite: PropTypes.bool.isRequired,
    images: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
  })),
  nearMode: PropTypes.bool,
};

export {OffersList};
export default withActiveItem(OffersList);
