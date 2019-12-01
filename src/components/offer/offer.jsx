import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import FeedbackList from '../feedback-list/feedback-list.jsx';

const mock = [{
  id: 1,
  name: `avasdf`,
  avatar_url: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/5.jpg`,
  comment: `askdh alksdhj alksd hlaksdh`,
  rating: 4,
  date: `2019-11-29T04:29:57.759Z`,
  is_pro: true
},
{
  id: 5,
  name: `avasdf`,
  avatar_url: `https://htmlacademy-react-2.appspot.com/six-cities/static/avatar/5.jpg`,
  comment: `askdh alksdhj alksd hlaksdh`,
  rating: 1,
  date: `2019-11-29T04:29:57.759Z`,
  is_pro: true
}]

const Offer = (props) => {
  if (!props.offers.length) return null;

  const offerId = parseInt(props.match.params.id, 10);
  const [offer] = props.offers.filter((it) => it.id === offerId);

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {offer.images.slice(0, 6).map((it, i) => (
              <div className="property__image-wrapper" key={i}>
                <img className="property__image" src={it} alt="Photo" />
              </div>
            ))}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {offer.is_premium
            && <div className="property__mark">
              <span>Premium</span>
            </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {offer.title}
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
                <span style={{width: `${offer.rating * 20}%`}} />
                <span className="visually-hidden">{offer.rating}</span>
              </div>
              <span className="property__rating-value rating__value">{offer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                Entire place
              </li>
              <li className="property__feature property__feature--bedrooms">
                {offer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {offer.max_adults} {offer.max_adults > 1 ? `adults` : `adult`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{offer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">{`What's inside`}</h2>
              <ul className="property__inside-list">
                {offer.goods.map((it) => (
                  <li className="property__inside-item" key={it}>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <FeedbackList offers={mock} />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};


const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
});

Offer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }).isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export {Offer};
export default connect(mapStateToProps, null)(Offer);
