import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import { NotReadyPage } from '../../client/NotReadyPage';
import { NoMatchPage } from '../../client/NoMatchPage';
import TournamentsPage from '../../client/tournaments/pages/TournamentsPage';
import TournamentDetailsPage from '../../client/tournaments/pages/TournamentDetailsPage';

export const AppRoutes = () => {
    const isAuth = useSelector(({auth}) => auth.isAuth, shallowEqual);

    return (
        <Switch>
            <Route exact path="/"
                   render={() => !isAuth ?
                       <NotReadyPage text={'Main'}/> :
                       <NotReadyPage text={'Profile'}/>
                   }
            />

            <Route path="/players/:id">
                <NotReadyPage text={'Player'}/>
            </Route>

            <Route exact path="/tournaments/">
                <TournamentsPage />
            </Route>

            <Route exact path="/tournaments/:id">
                <TournamentDetailsPage />
            </Route>

            <Route exact path="/team/">
                <NotReadyPage text={'Team'}/>
            </Route>

            <Route exact path="/partnership/">
                <NotReadyPage text={'Partnership'}/>
            </Route>

            <Route exact path="/terms/">
                <NotReadyPage text={'Terms'}/>
            </Route>

            <Route exact path="/about/">
                <NotReadyPage text={'About'}/>
            </Route>

            <Route exact path="/contacts/">
                <NotReadyPage text={'Contacts'}/>
            </Route>

            <Route path="*">
                <NoMatchPage/>
            </Route>
        </Switch>
    );
};
