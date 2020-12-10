import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from '../../client/example/pages/ExamplePage';
import UserProfile from '../../client/userPage/UserProfile';
import userProfileProps from '../../client/userPage/UserProfile/userProfileProps';

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
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <UserProfile {...userProfileProps} />
      </Route>
    </Switch>
  );
};
