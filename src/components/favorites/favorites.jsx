import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Operations from '../../store/operations';
import {getFavoritesCitiesList} from '../../store/selectors';
import {PROP_TYPES_OFFERS_LIST} from '../../types/types';

import Header from '../header/header.jsx';
import FavoritesEmpty from '../favorites-empty/favorites-empty.jsx';
import OffersList from '../offers-list/offers-list.jsx';
import Footer from '../footer/footer.jsx';

class Favorites extends React.PureComponent {
  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    if (!this.props.favorites.length) {
      return <FavoritesEmpty />;
    }

    return (
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <OffersList
                favoritesMode={true}
                offers={this.props.favorites}
                favoritesCity={this.props.favoritesCity}
              />
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

Favorites.propTypes = {
  getFavorites: PropTypes.func.isRequired,
  favorites: PROP_TYPES_OFFERS_LIST,
  favoritesCity: PropTypes.arrayOf(PropTypes.string),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  favorites: state.favorites,
  favoritesCity: getFavoritesCitiesList(state)
});

const mapDispatchToProps = (dispatch) => ({
  getFavorites: () => dispatch(Operations.getFavorites()),
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
