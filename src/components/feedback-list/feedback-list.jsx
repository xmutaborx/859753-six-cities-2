import React from 'react';
import {PROP_TYPES_COMMENTS_LIST} from '../../constants/prop-types';
import {MAX_COMMENTS} from '../../constants/constants';

import Feedback from '../feedback/feedback.jsx';

const FeedbackList = (props) => {
  const {comments} = props;
  let sortedList = comments.reverse();
  sortedList = sortedList.slice(0, MAX_COMMENTS);
  sortedList.sort((prev, next) => ((new Date(next.date)).getTime() - (new Date(prev.date)).getTime()));
  return (
    <React.Fragment>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {sortedList.map((it) => <Feedback comment={it} key={it.id} />)}
      </ul>
    </React.Fragment>
  );
};

FeedbackList.propTypes = {
  comments: PROP_TYPES_COMMENTS_LIST,
};

export default FeedbackList;
