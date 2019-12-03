import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import ActionCreator from '../../store/action-creator';

const withTypesSort = (Component) => {
  class WithTypesSort extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        sortType: `Popular`,
        isOpen: false,
      };

      this.handleToggleList = this.handleToggleList.bind(this);
      this.handleChangeType = this.handleChangeType.bind(this);
    }

    handleToggleList() {
      this.setState((prevState) => {
        return {
          isOpen: !prevState.isOpen
        };
      });
    }

    handleChangeType(option) {
      this.handleToggleList();
      this.setState({sortType: option.value});
      this.props.changeSortType(option.type);
    }

    render() {
      return (
        <Component
          {...this.props}
          onToggleList={this.handleToggleList}
          onChangeType={this.handleChangeType}
          isOpen={this.state.isOpen}
          sortTypeLabel={this.state.sortType}
          sortType={this.props.sortType}
        />
      );
    }
  }

  WithTypesSort.propTypes = {
    changeSortType: PropTypes.func.isRequired,
    sortType: PropTypes.string.isRequired,
  };

  return WithTypesSort;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType: (type) => dispatch(ActionCreator.changeSortType(type)),
});

const composedWithTypesSort = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withTypesSort
);

export default composedWithTypesSort;
