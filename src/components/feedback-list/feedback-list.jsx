import React from 'react';
import PropTypes from 'prop-types';

import Feedback from '../feedback/feedback.jsx';

const FeedbackList = (props) => {
  const {comments} = props;
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((it) => <Feedback comment={it} key={it.id} />)}
      </ul>
    </section>
  );
};

FeedbackList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};

export default FeedbackList;
