import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import Operation from '../../store/operation';

const withFeedbackForm = (Component) => {
  class WithFeedbackForm extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        comment: ``
      };

      this.handleChangeRating = this.handleChangeRating.bind(this);
      this.handleChangeComment = this.handleChangeComment.bind(this);
      this.handlePostComment = this.handlePostComment.bind(this);
    }

    handleChangeRating(event) {
      this.setState({rating: event.target.value});
    }

    handleChangeComment(event) {
      this.setState({comment: event.target.value});
    }

    handlePostComment(e, id) {
      e.preventDefault();
      if (!this.state.rating || !this.state.comment) {
        console.error(`error`);
        return;
      }
      this.props.postComments(this.props.id, this.state.rating, this.state.comment);
    }

    render() {
      return (
        <Component
          {...this.props}
          rating={this.state.rating}
          comment={this.state.comment}
          onChangeRating={this.handleChangeRating}
          onChangeComment={this.handleChangeComment}
          onPostComment={this.handlePostComment}
        />
      );
    }
  }

  WithFeedbackForm.propTypes = {
    postComments: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
  };

  return WithFeedbackForm;
};

const mapDispatchToProps = (dispatch) => ({
  postComments: (id, rating, comment) => dispatch(Operation.postComments(id, rating, comment)),
});

const composedWithFeedbackForm = compose(
    connect(null, mapDispatchToProps),
    withFeedbackForm
);

export default composedWithFeedbackForm;
