import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Operations from '../../store/operations';
import {PROP_TYPES_OFFERS_LIST, PROP_TYPES_COMMENTS_LIST, PROP_TYPES_USER_DATA} from '../../constants/prop-types';
import {correctRating} from '../../helpers/helpers';

import Header from '../header/header.jsx';
import FeedbackList from '../feedback-list/feedback-list.jsx';
import CitiesMap from '../cities-map/cities-map.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import FeedbackForm from '../feedback-form/feedback-form.jsx';

class Offer extends React.PureComponent {
  componentDidMount() {
    this.props.getComments(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      window.scrollTo({
        top: 0,
        behavior: `smooth`
      });
      this.props.getComments(this.props.match.params.id);
    }
  }

  render() {
    const offerId = Number(this.props.match.params.id);

    const [currentOffer] = this.props.offers.filter((it) => it.id === offerId);
    const nearOffers = this.props.offers.filter((it) => it.city.name === currentOffer.city.name && it.id !== offerId).slice(0, 3);
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
                {currentOffer.images.slice(0, 6).map((it) => (
                  <div className="property__image-wrapper" key={it}>
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
                  <button
                    className={`property__bookmark-button button` + (currentOffer.is_favorite ? ` property__bookmark-button--active` : ``)}
                    type="button"
                    onClick={() => this.props.toggleFavorites(offerId, !currentOffer.is_favorite)}
                  >
                    <svg className="property__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${correctRating(currentOffer.rating)}%`}} />
                    <span className="visually-hidden">{currentOffer.rating}</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {currentOffer.type}
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
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatar_url} width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                    </span>
                    {currentOffer.host.is_pro && (
                      <span className="property__user-status">
                        Pro
                      </span>
                    )}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <FeedbackList comments={this.props.comments} />
                  {this.props.userData.id && <FeedbackForm id={offerId} />}
                </section>
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
}

Offer.propTypes = {
  offers: PROP_TYPES_OFFERS_LIST,
  comments: PROP_TYPES_COMMENTS_LIST,
  userData: PropTypes.shape(PROP_TYPES_USER_DATA),
  getComments: PropTypes.func.isRequired,
  toggleFavorites: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  }),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
  comments: state.comments,
  userData: state.userData,
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(Operations.getComments(id)),
  toggleFavorites: (id, status) => dispatch(Operations.toggleFavorites(id, status)),
});

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
