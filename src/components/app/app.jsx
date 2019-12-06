import React from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../sign-in/sign-in.jsx';
import Offer from '../offer/offer.jsx';
import MainPage from '../main-page/main-page.jsx';
import Favorites from '../favorites/favorites.jsx';
import withAuth from '../../hocs/with-auth/with-auth.jsx';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/offer/:id" component={Offer} />
      <Route exact path="/favorites" component={withAuth(Favorites)} />
    </Switch>
  );
};

export default App;
