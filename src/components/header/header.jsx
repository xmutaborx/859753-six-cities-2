import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Header = ({userData}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {userData.id
                  ? <Link to="/favorites" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      {userData.email}
                    </span>
                  </Link>
                  : <Link to="/login" className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">
                      Sign in
                    </span>
                  </Link>}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  userData: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    // eslint-disable-next-line camelcase
    avatar_url: PropTypes.string,
    // eslint-disable-next-line camelcase
    is_pro: PropTypes.bool,
  })
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  userData: state.userData,
});

export {Header};
export default connect(mapStateToProps, null)(Header);
