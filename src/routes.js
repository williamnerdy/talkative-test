import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './screens/sign-in';
import SignUp from './screens/sign-up';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />
      <Route path="*" render={() => <Redirect to="/sign-in" />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
