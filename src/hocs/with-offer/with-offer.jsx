import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';

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
      const offerId = parseInt(this.props.match.params.id, 10);
      const [offer] = this.props.offers.filter((it) => it.id === offerId);

      let nearOffers = this.props.offers.filter((it) => it.city.name === offer.city.name && it.id !== offerId);
      nearOffers = nearOffers.slice(0, 3);
      const allOffers = nearOffers.concat([offer]);

      return (
        <Component
          {...this.props}
          offerId={this.props.match.params.id}
          comments={this.state.comments}
          currentOffer={offer}
          nearOffers={nearOffers}
          allOffers={allOffers}
        />
      );
    }
  }

  WithOffer.propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      })
    }).isRequired,
    offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  return WithOffer;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
});

const composedWithOffer = compose(
    connect(mapStateToProps, null),
    withOffer
);

export default composedWithOffer;
