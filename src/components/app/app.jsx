import React, {PureComponent} from 'react';
import {Switch, Route} from 'react-router-dom';

import SignIn from '../sign-in/sign-in.jsx';
import Offer from '../offer/offer.jsx';
import MainPage from '../main-page/main-page.jsx';

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/offer/:id" component={Offer} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    );
  }
}

export default App;