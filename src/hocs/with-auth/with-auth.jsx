import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import history from '../../history';

const withAuth = (Component) => {
  const WithAuth = (props) => {
    if (!props.userData.id) {
      history.push(`/login`);
      return null;
    }
    return (
      <Component
        {...props}
      />
    );
  };

  WithAuth.propTypes = {
    userData: PropTypes.shape({
      id: PropTypes.number
    }),
  };

  return WithAuth;
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  userData: state.userData,
});

const composedWithAuth = compose(
    connect(mapStateToProps, null),
    withAuth
);

export {withAuth};
export default composedWithAuth;
