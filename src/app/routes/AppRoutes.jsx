import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ExamplePage } from '../../client/example/pages/ExamplePage';
import { mainPageStyle } from '../../client/Main/pages/MainPage/style';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
      
    </Switch>
  );
};
