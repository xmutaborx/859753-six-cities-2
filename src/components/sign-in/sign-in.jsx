import React from 'react';
import PropTypes from 'prop-types';
import Operation from '../../store/operation';
import {connect} from 'react-redux';

const SignIn = (props) => {
  let loginInput;
  let password;

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submitForm(loginInput.value, password.value);
  };

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  ref={(e) => {
                    loginInput = e;
                  }}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  ref={(e) => {
                    password = e;
                  }}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  submitForm: (login, password) => dispatch(Operation.authorization(login, password)),
});

SignIn.propTypes = {
  submitForm: PropTypes.func.isRequired,
};

export {SignIn};
export default connect(null, mapDispatchToProps)(SignIn);
