import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from '../../client/example/pages/ExamplePage';
import UserPlayerPage from '../../client/player/pages/UserPlayerPage';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ExamplePage />
      </Route>
      <Route exact path="/foo">
        <p>BAR</p>
      </Route>
      <Route exact path="/player">
        <UserPlayerPage />
      </Route>
    </Switch>
  );
};
