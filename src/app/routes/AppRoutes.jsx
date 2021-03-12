import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from '../../client/pages/main/pages/MainPage/MainPage';
import { shallowEqual, useSelector } from 'react-redux';

import { NotReadyPage } from '../../client/pages/NotReadyPage';
import { NoMatchPage } from '../../client/pages/NoMatchPage';
import TournamentsPage from '../../client/pages/tournaments/pages/TournamentsPage';
import TournamentDetailsPage from '../../client/pages/tournamentDetails/pages/TournamentDetailsPage';
import MatchDetailsPage
    from '../../client/pages/matchDetails/pages/MatchDetailsPage';
import UserProfile from '../../client/pages/user/pages/UserProfile';
import TeamPage from '../../client/pages/team/pages/TeamPage';
import PartnershipPage from "../../client/pages/partnership/pages/PartnershipPage";

export const AppRoutes = () => {
    const isAuth = useSelector(({auth}) => auth.isAuth, shallowEqual);

    return (
        <Switch>
            <Route exact path="/"
                   render={() => !isAuth ?
                       <MainPage/> :
                       <UserProfile/>
                   }
            />

            <Route path="/players/:id">
                <NotReadyPage text={'Player'}/>
            </Route>

            <Route exact path="/tournaments">
                <TournamentsPage />
            </Route>

            <Route exact path="/tournaments/:id">
                <TournamentDetailsPage />
            </Route>

            <Route exact path="/matches/:id">
                <MatchDetailsPage />
            </Route>

            <Route exact path="/team"
                   render={() => !isAuth ?
                       <MainPage/> :
                       // <NotReadyPage text={'Team'}/>
                       <TeamPage/>
                   }
            />

            <Route exact path="/partnership/">
                <PartnershipPage/>
            </Route>

            <Route exact path="/terms">
                <NotReadyPage text={'Terms'}/>
            </Route>

            <Route exact path="/about">
                <NotReadyPage text={'About'}/>
            </Route>

            <Route exact path="/contacts">
                <NotReadyPage text={'Contacts'}/>
            </Route>

            <Route path="*">
                <NoMatchPage/>
            </Route>
        </Switch>
    );
};
