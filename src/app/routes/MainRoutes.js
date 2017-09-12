// @flow weak

import React            from 'react';
import {
  Route,
  Switch
 }                      from 'react-router';
import Home             from '../views/home';
import About            from '../views/about';
import PrivateRoute     from '../components/privateRoute/PrivateRoute';
import Protected        from '../views/protected';
import WebStarters      from '../views/webStarters';
import WebApps          from '../views/webApps';

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/webstarters" component={WebStarters} />
      <Route path="/webapps" component={WebApps} />
      <Route path="/about" component={About} />
      {/* private views: need user to be authenticated */}
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>
  );
};

export default MainRoutes;
