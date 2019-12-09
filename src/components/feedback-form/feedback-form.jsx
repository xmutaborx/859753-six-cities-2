import React from 'react';
import PropTypes from 'prop-types';
import withFeedbackForm from '../../hocs/with-feedback-form/with-feedback-form.jsx';

import {FEEDBACK_STARS} from '../../constants/constants';

const FeedbackForm = (props) => {
  const {rating, comment, onChangeRating, onChangeComment, onPostComment} = props;

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {FEEDBACK_STARS.map((it) => (
          <React.Fragment key={it.id}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={it.value}
              id={it.id}
              type="radio"
              checked={rating === it.value}
              onChange={onChangeRating}
            />
            <label htmlFor={it.id} className="reviews__rating-label form__rating-label" title={it.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={onChangeComment}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span>
          and describe your stay with at least
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
          onClick={onPostComment}
        >Submit</button>
      </div>
    </form>
  );
};

FeedbackForm.propTypes = {
  rating: PropTypes.string,
  comment: PropTypes.string,
  onChangeRating: PropTypes.func.isRequired,
  onChangeComment: PropTypes.func.isRequired,
  onPostComment: PropTypes.func.isRequired,
};

export {FeedbackForm};
export default withFeedbackForm(FeedbackForm);
