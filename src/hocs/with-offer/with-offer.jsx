import React from 'react';
import configureAPI from '../../api';

const api = configureAPI();

const withOffer = (Component) => {
  class WithOffer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        comments: [],
      };
    }

    componentDidMount() {
      api.get(`/comments/${this.props.match.params.id}`)
        .then((response) => {
          this.setState({comments: response.data});
        });
    }

    render() {
      return (
        <Component
          {...this.props}
          comments={this.state.comments}
        />
      );
    }
  }

  WithOffer.propTypes = {};

  return WithOffer;
};

export default withOffer;
