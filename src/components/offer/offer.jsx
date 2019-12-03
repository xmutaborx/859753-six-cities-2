import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Operation from '../../store/operation';

import Header from '../header/header.jsx';
import FeedbackList from '../feedback-list/feedback-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import OffersList from '../offer-list/offers-list.jsx';


class Offer extends React.PureComponent {
  componentDidMount() {
    this.props.getComments(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo(0, 0);
      this.props.getComments(this.props.match.params.id);
    }
  }

  render() {
    const offerId = Number(this.props.match.params.id);
    const [currentOffer] = this.props.offers.filter((it) => it.id === offerId);

    let nearOffers = this.props.offers.filter((it) => it.city.name === currentOffer.city.name && it.id !== offerId).slice(0, 3);
    const allOffers = nearOffers.concat([currentOffer]);

    if (!currentOffer) {
      return null;
    }

    return (
      <div className="page">
        <Header />
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
                <FeedbackList comments={this.props.comments} />
              </div>
            </div>
            <section className="property__map map">
              <CitiesMap offersList={allOffers} offerId={offerId} />
            </section>
          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <OffersList offers={nearOffers} nearMode={true} />
            </section>
          </div>

        </main>
      </div>
    );
  }
};

Offer.propTypes = {
  currentOffer: PropTypes.object,
  nearOffers: PropTypes.arrayOf(PropTypes.object),
  allOffers: PropTypes.arrayOf(PropTypes.object),
  comments: PropTypes.arrayOf(PropTypes.object),
  offerId: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(Operation.getComments(id)),
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
