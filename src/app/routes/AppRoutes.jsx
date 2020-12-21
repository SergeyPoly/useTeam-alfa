import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotReadyPage } from '../../client/NotReadyPage';
import { NoMatchPage } from '../../client/NoMatchPage';

export const AppRoutes = () => {
    const isAuth = true;
    const inProgress = true;

    return (
        <Switch>
            <Route exact path="/"
                   render={() => !isAuth ?
                       <NotReadyPage/> :
                       <NotReadyPage/>
                   }
            />

            <Route path="/player/:id">
                <NotReadyPage/>
            </Route>

            <Route exact path="/tournaments/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/tournaments/:id"
                   render={() => !inProgress ?
                       <NotReadyPage/> :
                       <NotReadyPage/>
                   }/>

            <Route exact path="/team/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/Partnership/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/Terms/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/About/">
                <NotReadyPage/>
            </Route>

            <Route exact path="/Contacts/">
                <NotReadyPage/>
            </Route>

            <Route path="*">
                <NoMatchPage/>
            </Route>
        </Switch>
    );
};
