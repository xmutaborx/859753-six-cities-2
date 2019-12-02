import React from 'react';
import PropTypes from 'prop-types';

import withOffer from '../../hocs/with-offer/with-offer.jsx';
import FeedbackList from '../feedback-list/feedback-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import OfferList from '../offer-list/offer-list.jsx';

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
        </div>
        <section className="property__map map">
          <CitiesMap offersList={nearOffers}/>
        </section>
      </section>

      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">

            <article className="near-places__card place-card">
              <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                  <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
                </a>
              </div>
              <div className="place-card__info">
                <div className="place-card__price-wrapper">
                  <div className="place-card__price">
                    <b className="place-card__price-value">&euro;80</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                  </div>
                  <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="place-card__rating rating">
                  <div className="place-card__stars rating__stars">
                    <span style={{width: `80%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <h2 className="place-card__name">
                  <a href="#">Wood and stone place</a>
                </h2>
                <p className="place-card__type">Private room</p>
              </div>
            </article>
          </div>
        </section>
      </div>

    </main>
  );
};

Offer.propTypes = {
  currentOffer: PropTypes.object,
  nearOffers: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default withOffer(Offer);
