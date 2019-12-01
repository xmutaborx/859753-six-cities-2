import React from 'react';
import Feedback from '../feedback/feedback.jsx'

const FeedbackList = (props) => {
  const {offers} = props;
  return (
    <ul className="reviews__list">
      {offers.map((it) => <Feedback offer={it} key={it.id} />)}
    </ul>
  )
};

export default FeedbackList;
