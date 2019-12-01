import React from 'react';
import PropTypes from 'prop-types';
import ActionCreator from '../../store/action-creator';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const OfferCard = (props) => {
  const {id,
    title,
    price,
    type,
    isPremium,
    isFavorite,
    image,
    rating,
    onMouseOver,
    toggleFavorites} = props;

  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseOver}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button` + (isFavorite ? ` place-card__bookmark-button--active` : ``)}
            type="button"
            onClick={() => toggleFavorites(id)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onMouseOver: PropTypes.func,
  toggleFavorites: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  toggleFavorites: (id) => dispatch(ActionCreator.toggleFavorites(id)),
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
