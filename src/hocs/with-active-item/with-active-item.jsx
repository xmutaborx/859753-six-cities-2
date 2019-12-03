import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import ActionCreator from '../../store/action-creator';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: {}
      };

      this.handleChangeActiveItem = this.handleChangeActiveItem.bind(this);
      this.handleClearItem = this.handleClearItem.bind(this);
    }

    handleChangeActiveItem(item) {
      this.setState({activeItem: item});
      const location = item.location;
      this.props.setActivePin([location.latitude, location.longitude]);
    }

    handleClearItem() {
      this.setState({activeItem: {}});
      this.props.setActivePin([0, 0]);
    }

    render() {
      return (
        <Component
          {...this.props}
          onChangeActiveItem={this.handleChangeActiveItem}
          onClearItem={this.handleClearItem}
        />
      );
    }
  }

  WithActiveItem.propTypes = {
    setActivePin: PropTypes.func.isRequired,
  };

  return WithActiveItem;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activePin: state.activePin,
});

const mapDispatchToProps = (dispatch) => ({
  setActivePin: (pin) => dispatch(ActionCreator.setActivePin(pin)),
});

const composedWithActiveItem = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withActiveItem
);

export default composedWithActiveItem;
