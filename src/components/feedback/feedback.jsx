import React from 'react';
import PropTypes from 'prop-types';

const Feedback = (props) => {
  // eslint-disable-next-line camelcase
  const {comment, rating, date, user: {avatar_url, name}} = props.comment;
  // eslint-disable-next-line camelcase
  const avatarUrl = avatar_url;

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
            <span style={{width: `${rating * 20}%`}}></span>
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
  comment: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.array,
    rating: PropTypes.number,
    date: PropTypes.string,
    user: PropTypes.object,
    // eslint-disable-next-line camelcase
    avatar_url: PropTypes.string,
    name: PropTypes.string,
  })),
};

export default Feedback;
