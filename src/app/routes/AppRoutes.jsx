import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../../client/Main/pages/MainPage/MainPage';


export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Switch>
  );
};
