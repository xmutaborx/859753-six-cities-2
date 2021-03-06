import React from 'react';
import PropTypes from 'prop-types';
import {correctRating, dateTime} from '../../helpers/helpers';

const Feedback = (props) => {
  // eslint-disable-next-line camelcase
  const {comment, rating, date, user: {avatar_url: avatarUrl, name}} = props.comment;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${correctRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time">{dateTime(date)}</time>
      </div>
    </li>
  );
};

Feedback.propTypes = {
  comment: PropTypes.shape({
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    user: PropTypes.shape({
      // eslint-disable-next-line camelcase
      avatar_url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  }),
};

export default Feedback;
