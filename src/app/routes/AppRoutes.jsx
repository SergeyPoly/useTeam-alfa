import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TeamPage from '../../client/Team/pages/TeamPage';
import MainPage from '../../client/mainPage/pages/MainPage/MainPage';
import { shallowEqual, useSelector } from 'react-redux';

import { NotReadyPage } from '../../client/NotReadyPage';
import { NoMatchPage } from '../../client/NoMatchPage';
import UserProfile from '../../client/userProfile/components/UserProfile';
import userProfileProps from './../../client/userProfile/userProfileProps';
import Achievements from '../../client/achievements/components/Achievements';
import achivementsProps from './../../client/achievements/achievementsProps';
import TournamentsPage from '../../client/Tournaments/pages/TournamentsPage';


export const AppRoutes = () => {
    const isAuth = useSelector(state => state.navbar.isAuth, shallowEqual);

    return (
        <Switch>

            <Route exact path="/"
                   render={() => !isAuth ?
                       <MainPage/> :
                       <div className={'container temporary-style__content'}>
                           <Achievements {...achivementsProps}/>
                           <UserProfile {...userProfileProps} />
                       </div>
                   }
            />

            <Route path="/players/:id">
                <NotReadyPage text={'Player'}/>
            </Route>

            <Route exact path="/tournaments/">
                <TournamentsPage />
            </Route>

            <Route exact path="/tournaments/:id">
                <NotReadyPage text={'Tournaments'}/>
            </Route>

            <Route exact path="/team/"
                   render={() => !isAuth ?
                       <MainPage/> :
                       <div className={'container temporary-style__content'}>
                           <Achievements {...achivementsProps}/>
                           <TeamPage />
                       </div>
                   }
            />

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
