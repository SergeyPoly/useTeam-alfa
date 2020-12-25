import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotReadyPage } from '../../client/NotReadyPage';
import { NoMatchPage } from '../../client/NoMatchPage';

export const AppRoutes = () => {
    const isAuth = true;

    return (
        <Switch>
            <Route exact path="/"
                   render={() => !isAuth ?
                       <NotReadyPage/> :
                       <NotReadyPage/>
                   }
            />

            <Route path="/players/:id">
                <NotReadyPage/>
            </Route>

            <Route exact path="/tournaments/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/tournaments/:id">
                <NotReadyPage/>
            </Route>

            <Route exact path="/team/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/partnership/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/terms/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/about/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/contacts/">
                <NotReadyPage/>
            </Route>

            <Route path="*">
                <NoMatchPage/>
            </Route>
        </Switch>
    );
};
