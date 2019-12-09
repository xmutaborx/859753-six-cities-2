import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import ActionCreator from '../../store/action-creator';

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.handleChangeActiveItem = this.handleChangeActiveItem.bind(this);
      this.handleClearActiveItem = this.handleClearActiveItem.bind(this);
    }

    handleChangeActiveItem(item) {
      const location = item.location;
      this.props.setActivePin([location.latitude, location.longitude]);
    }

    handleClearActiveItem() {
      this.props.setActivePin([0, 0]);
    }

    render() {
      return (
        <Component
          {...this.props}
          onChangeActiveItem={this.handleChangeActiveItem}
          onClearItem={this.handleClearActiveItem}
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

export {withActiveItem};
export default composedWithActiveItem;
