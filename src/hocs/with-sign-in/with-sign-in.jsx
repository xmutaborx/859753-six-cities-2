import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import Operations from '../../store/operations';

const withSignIn = (Component) => {
  class WithSignIn extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        login: ``,
        password: ``,
      };

      this.handleSubmitForm = this.handleSubmitForm.bind(this);
      this.handleChangeLogin = this.handleChangeLogin.bind(this);
      this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleSubmitForm(e) {
      e.preventDefault();
      this.props.submitForm(this.state.login, this.state.password);
    }

    handleChangeLogin(e) {
      this.setState({login: e.target.value});
    }

    handleChangePassword(e) {
      this.setState({password: e.target.value});
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmitForm={this.handleSubmitForm}
          login={this.state.login}
          password={this.state.password}
          onChangeLogin={this.handleChangeLogin}
          onChangePassword={this.handleChangePassword}
        />
      );
    }
  }

  WithSignIn.propTypes = {
    submitForm: PropTypes.func.isRequired,
  };

  return WithSignIn;
};

const mapDispatchToProps = (dispatch) => ({
  submitForm: (login, password) => dispatch(Operations.authorization(login, password)),
});

const composedWithSignIn = compose(
    connect(null, mapDispatchToProps),
    withSignIn
);

export default composedWithSignIn;
