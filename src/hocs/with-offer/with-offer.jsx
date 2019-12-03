import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import Operation from '../../store/operation';

const withOffer = (Component) => {
  class WithOffer extends React.PureComponent {
    componentDidMount() {
      this.props.getComments(this.props.match.params.id);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id) {
        window.scrollTo(0, 0);
        this.props.getComments(this.props.match.params.id);
      }
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
          comments={this.props.comments}
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
  comments: state.comments
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (id) => dispatch(Operation.getComments(id)),
});

const composedWithOffer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withOffer
);

export default composedWithOffer;
