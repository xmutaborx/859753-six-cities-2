import React from 'react';
import PropTypes from 'prop-types';

import withOffer from '../../hocs/with-offer/with-offer.jsx';
import FeedbackList from '../feedback-list/feedback-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';

const Offer = (props) => {
  const {currentOffer, nearOffers, comments} = props;

  if (!currentOffer) {
    return null;
  }

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {currentOffer.images.slice(0, 6).map((it, i) => (
              <div className="property__image-wrapper" key={i}>
                <img className="property__image" src={it} alt="Photo" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {currentOffer.is_premium
            && <div className="property__mark">
              <span>Premium</span>
            </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {currentOffer.title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width={31} height={33}>
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${currentOffer.rating * 20}%`}} />
                <span className="visually-hidden">{currentOffer.rating}</span>
              </div>
              <span className="property__rating-value rating__value">{currentOffer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                Entire place
              </li>
              <li className="property__feature property__feature--bedrooms">
                {currentOffer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {currentOffer.max_adults} {currentOffer.max_adults > 1 ? `adults` : `adult`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{currentOffer.price}</b>
              <span className="property__price-text">night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">{`What's inside`}</h2>
              <ul className="property__inside-list">
                {currentOffer.goods.map((it) => (
                  <li className="property__inside-item" key={it}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
              <FeedbackList offers={comments} />
            </section>
          </div>
          <section className="property__map map">
            <CitiesMap offersList={nearOffers}/>
          </section>
        </div>
      </section>
    </main>
  );
};

Offer.propTypes = {
  currentOffer: PropTypes.object,
  nearOffers: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default withOffer(Offer);
