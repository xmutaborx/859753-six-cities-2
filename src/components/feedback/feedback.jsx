import React from 'react';
import PropTypes from 'prop-types';

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
            <span style={{width: `${rating * 20}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">{date}</time>
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
